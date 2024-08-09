namespace API.Entities;

public class Prediction
{
    public int Id { get; set; }
    public int Points { get; set; }
    public int UserId { get; set; }
    public User? User { get; set; }
    public int FixtureId { get; set; }
    public Fixture? Fixture { get; set; }
    public List<string>? Outcomes { get; set; }
    public List<string>? Results { get; set; }
    public int PlayerId { get; set; }
    public Player? Player { get; set; }
}

