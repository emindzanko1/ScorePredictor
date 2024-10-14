using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PredictionsController(DataContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Prediction>>> GetPredictions()
    {
        var predictions = await context.Predictions.ToListAsync();
        return Ok(predictions);
    }

    [HttpPost]
    public async Task<IActionResult> SubmitPrediction([FromBody] Prediction prediction)
    {
        if (prediction == null)
        {
            return BadRequest("Prediction data is null.");
        }

        context.Predictions.Add(prediction);
        await context.SaveChangesAsync();

        return Ok(prediction);
    }

    [HttpGet("{userId}/{fixtureId}")]
    public async Task<ActionResult<Prediction>> GetPrediction(int userId, int fixtureId)
    {
        var prediction = await context.Predictions
            .FirstOrDefaultAsync(p => p.UserId == userId && p.FixtureId == fixtureId);

        if (prediction == null)
        {
            return NotFound();
        }

        return Ok(prediction);
    }

    // private static int CalculatePoints(Prediction prediction, Dictionary<int, (int homeScore, int awayScore)> matchResults, Dictionary<int, List<int>> matchScorers)
    // {
    //     int points = 0;

    //     // admin salje predikciju - actual result
    //     // sad na osnovu toga 

    //     for (int i = 0; i < prediction?.Outcomes?.Count; i++)
    //     {
    //         var matchId = prediction.FixtureId; 
    //         var actualResult = matchResults.ContainsKey(matchId) ? matchResults[matchId] : (0, 0);
    //         var predictedOutcome = prediction.Outcomes[i];
    //         var actualOutcome = GetMatchOutcome(actualResult.homeScore, actualResult.awayScore);

    //         if (predictedOutcome == actualOutcome)
    //         {
    //             points += 1;
    //         }
    //     }

    //     // Calculate points for results
    //     for (int i = 0; i < prediction.Results.Count; i++)
    //     {
    //         var matchId = prediction.FixtureId; // Adjust as needed
    //         var actualResult = matchResults.ContainsKey(matchId) ? matchResults[matchId] : (0, 0);
    //         var predictedResult = prediction.Results[i];
    //         var actualResultString = $"{actualResult.homeScore} : {actualResult.awayScore}";

    //         if (predictedResult == actualResultString)
    //         {
    //             points += 3;
    //         }
    //     }

    //     foreach (var scorerId in prediction.Scorers)
    //     {
    //         foreach (var matchScorersList in matchScorers.Values)
    //         {
    //             if (matchScorersList.Contains(scorerId))
    //             {
    //                 points += 2;
    //             }
    //         }
    //     }

    //     return points;
    // }
    private static string GetMatchOutcome(int homeScore, int awayScore)
    {
        if (homeScore > awayScore) return "1";
        if (homeScore < awayScore) return "2";
        return "X";
    }

}
