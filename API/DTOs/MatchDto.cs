using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs;

public class MatchDto
{
    public int Id { get; set; } 
    public string Result { get; set; } = null!;
    public List<string>? Scorer { get; set; } 
}
