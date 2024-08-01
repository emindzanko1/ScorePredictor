namespace API.Entities;

public class Prediction
{
    public int Id { get; set; }
    public int Points { get; set; }
    public int UserId { get; set; }
    public User User { get; set; } = null!;
    public int FixtureId { get; set; }
    public Fixture Fixture { get; set; } = null!;
    public List<string> Outcomes { get; set; } = null!;
    public List<string> Result { get; set; } = null!;
    public Player Scorer { get; set; } = null!;
}

