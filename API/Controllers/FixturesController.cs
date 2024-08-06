using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FixturesController(DataContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Fixture>>> GetFixtures()
    {
        var fixtures = await context.Fixtures.ToListAsync();
        return Ok(fixtures);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Fixture>> GetFixture(int id)
    {
        var fixture = await context.Fixtures.FindAsync(id);

        if (fixture == null) return NotFound();

        return fixture;
    }

    [HttpGet("upcoming")]
    public async Task<ActionResult<Fixture>> GetUpcomingFixture()
    {
        var now = DateTime.UtcNow;
        var upcomingFixture = await context.Fixtures
            .Include(f => f.Matches)
            .OrderBy(f => f.Matches.Min(m => m.MatchDateTime))
            .FirstOrDefaultAsync(f => f.Matches.Any(m => m.MatchDateTime > now));

        if (upcomingFixture == null)
            return NotFound("No upcoming fixtures found.");

        return Ok(upcomingFixture);
    }
}