using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

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
}

