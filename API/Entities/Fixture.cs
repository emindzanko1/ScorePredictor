namespace API.Entities;

public class Fixture
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public ICollection<Match> Matches { get; set; } = null!;
}

