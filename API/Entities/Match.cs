namespace API.Entities;

public class Match
{
    public int Id { get; set; }
    public string Result { get; set; } = null!;
    public ICollection<MatchScorer> MatchScorers { get; set; } = null!;
    public DateTime MatchDateTime { get; set; }
    public int FixtureId { get; set; }
    public Fixture Fixture { get; set; } = null!;
    public int HomeTeamId { get; set; }
    public int AwayTeamId { get; set; }
    public Team HomeTeam { get; set; } = null!;
    public Team AwayTeam { get; set; } = null!;
    public string Outcome { get; set; } = null!;  
}
