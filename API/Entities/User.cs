namespace API.Entities;

public class User
{
    public int Id { get; set; }
    public required string Username { get; set; }
    public required string Email { get; set; }
    public required byte[] PasswordHash { get; set; }
    public required byte[] PasswordSalt { get; set; }
    public int Points { get; set; }
    public string? Picture { get; set; }
    public required string FullName { get; set; }
    public ICollection<Prediction> Predictions { get; set; } = null!;
}
