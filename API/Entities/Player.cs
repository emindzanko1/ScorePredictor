namespace API.Entities;

public class Player
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public int TotalGoals { get; set; }
    public int TeamId { get; set; }
    public Team? Team { get; set; }
    public ICollection<MatchScorer>? MatchScorers;
}
