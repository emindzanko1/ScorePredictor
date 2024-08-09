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
}
