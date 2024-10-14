using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using API.DTOs;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MatchesController(DataContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Match>>> GetMatches()
    {
        var matches = await context.Matches.ToListAsync();
        return Ok(matches);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<IEnumerable<Match>>> GetMatchesByFixtureId(int id)
    {
        var matches = await context.Matches.Where(x => x.FixtureId == id).ToListAsync();
        return Ok(matches);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMatch(int id, MatchDto matchDto)
    {
        if (id != matchDto.Id)
        {
            return BadRequest();
        }

        var match = await context.Matches.FindAsync(id);
        if (match == null)
        {
            return NotFound();
        }

        match.Result = matchDto.Result;
        // match.Scorer = matchDto.Scorer;

        try
        {
            await context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!MatchExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return Ok();
    }

    private bool MatchExists(int id)
    {
        return context.Matches.Any(e => e.Id == id);
    }

    // [HttpPost]
    // public async Task<IActionResult> SubmitMatchData([FromBody]  match)
    // {
    //     // mozda ne treba citav match
    //     if (match == null)
    //     {
    //         return BadRequest("Match data is null.");
    //     }

    //     context.Matches.Update(match);
    //     await context.SaveChangesAsync();

    //     return Ok(match);
    // }
}

