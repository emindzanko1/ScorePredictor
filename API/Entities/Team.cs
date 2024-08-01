namespace API.Entities;

public class Team
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public ICollection<Player> Players { get; set; } = null!;
}
