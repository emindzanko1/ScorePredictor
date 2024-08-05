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
}