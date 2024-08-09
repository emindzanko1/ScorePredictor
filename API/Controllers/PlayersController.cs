using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayersController(DataContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Player>>> GetPlayers()
    {
        var players = await context.Players.ToListAsync();
        return Ok(players);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Player>> GetPlayerById(int id)
    {
        var player = await context.Players.FindAsync(id);

        if (player == null) return NotFound();

        return player;
    }
}

