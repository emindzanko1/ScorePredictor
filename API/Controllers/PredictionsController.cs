using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PredictionsController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;

        public PredictionsController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Prediction>>> GetPredictions()
        {
            var predictions = await _context.Predictions.ToListAsync();
            return Ok(predictions);
        }

        [HttpPost]
        public async Task<IActionResult> SubmitPrediction([FromBody] Prediction prediction)
        {
            if (prediction == null)
                return BadRequest("Prediction data is null.");

            var adminId = _configuration.GetValue<int>("AdminUserId");
            var isAdmin = prediction.UserId == adminId;

            if (!isAdmin)
            {
                _context.Predictions.Add(prediction);
                await _context.SaveChangesAsync();
                return Ok(prediction);
            }

            var fixture = await _context.Fixtures
                .Include(f => f.Matches!)
                    .ThenInclude(m => m.MatchScorers)
                .FirstOrDefaultAsync(f => f.Id == prediction.FixtureId);

            if (fixture == null)
            {
                return NotFound("Fixture not found.");
            }

            for (int i = 0; i < fixture.Matches!.Count; i++)
            {
                var match = fixture.Matches.ElementAt(i);

                match.Result = prediction.Results?[i] ?? "- : -";
                match.Outcome = prediction.Outcomes?[i] ?? "";
            }

            await _context.SaveChangesAsync();

            var allPredictions = await _context.Predictions
                .Where(p => p.FixtureId == prediction.FixtureId)
                .ToListAsync();

            foreach (var userPrediction in allPredictions)
            {
                int totalPoints = CalculatePoints(userPrediction, fixture);
                var user = await _context.Users.FindAsync(userPrediction.UserId);

                if (user != null)
                    user.Points += totalPoints;

                userPrediction.Points = totalPoints;
            }

            await _context.SaveChangesAsync();

            return Ok(new { prediction, message = "Prediction submitted and points calculated for all users." });
        }

        [HttpGet("{userId}/{fixtureId}")]
        public async Task<ActionResult<Prediction>> GetPrediction(int userId, int fixtureId)
        {
            var prediction = await _context.Predictions
                .FirstOrDefaultAsync(p => p.UserId == userId && p.FixtureId == fixtureId);

            if (prediction == null)
                return NoContent();

            return Ok(prediction);
        }

        private static int CalculatePoints(Prediction prediction, Fixture fixture)
        {
            int totalPoints = 0;

            for (int i = 0; i < fixture.Matches!.Count; i++)
            {
                var match = fixture.Matches.ElementAt(i);
                var predictedOutcome = prediction.Outcomes?[i];

                if (predictedOutcome == null)
                    continue;

                string actualOutcome = CalculateMatchOutcome(match);

                if (predictedOutcome == actualOutcome)
                    totalPoints += 1;
            }

            if (prediction.Results != null && prediction.Results.Count == fixture.Matches.Count)
            {
                for (int i = 0; i < fixture.Matches.Count; i++)
                {
                    var match = fixture.Matches.ElementAt(i);
                    var predictedResult = prediction.Results?[i];

                    if (predictedResult == match.Result)
                        totalPoints += 3;
                }
            }

            totalPoints += CalculateScorerPoints(prediction.PlayerId, fixture.Matches);

            return totalPoints;
        }

        private static string CalculateMatchOutcome(Match match)
        {
            if (string.IsNullOrEmpty(match.Result) || match.Result == "- : -")
                return "0";

            var resultSplit = match.Result.Split(':');
            int homeTeamGoals = int.Parse(resultSplit[0]);
            int awayTeamGoals = int.Parse(resultSplit[1]);

            if (homeTeamGoals > awayTeamGoals)
                return "1";
                
            else if (awayTeamGoals > homeTeamGoals)
                return "2";

            return "X";
        }

        private static int CalculateScorerPoints(int? predictedPlayerId, ICollection<Match> matches)
        {
            if (predictedPlayerId == null || predictedPlayerId == 0)
                return 0;

            foreach (var match in matches)
                if (match.MatchScorers.Any(s => s.PlayerId == predictedPlayerId))
                    return 2;

            return 0;
        }
    }
}
