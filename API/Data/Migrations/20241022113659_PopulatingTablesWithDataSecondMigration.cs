using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class PopulatingTablesWithDataSecondMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-03 15:00:00', 1, 5, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-03 15:00:00', 1, 8, 10, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-03 15:00:00', 1, 3, 12, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-03 15:00:00', 1, 4, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-03 15:00:00', 1, 11, 9, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-03 15:00:00', 1, 1, 2, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-10 15:00:00', 2, 7, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-10 15:00:00', 2, 9, 5, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-10 15:00:00', 2, 8, 4, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-10 15:00:00', 2, 6, 11, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-10 15:00:00', 2, 12, 1, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-10 15:00:00', 2, 10, 2, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-17 15:00:00', 3, 2, 12, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-17 15:00:00', 3, 3, 9, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-17 15:00:00', 3, 4, 10, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-17 15:00:00', 3, 1, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-17 15:00:00', 3, 5, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-17 15:00:00', 3, 11, 8, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-24 15:00:00', 4, 8, 5, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-24 15:00:00', 4, 7, 2, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-24 15:00:00', 4, 6, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-24 15:00:00', 4, 9, 1, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-24 15:00:00', 4, 4, 11, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-24 15:00:00', 4, 10, 12, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-31 15:00:00', 5, 2, 9, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-31 15:00:00', 5, 11, 10, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-31 15:00:00', 5, 3, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-31 15:00:00', 5, 5, 4, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-31 15:00:00', 5, 12, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-08-31 15:00:00', 5, 1, 6, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-14 15:00:00', 6, 8, 1, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-14 15:00:00', 6, 4, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-14 15:00:00', 6, 6, 2, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-14 15:00:00', 6, 11, 5, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-14 15:00:00', 6, 10, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-14 15:00:00', 6, 9, 12, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-21 15:00:00', 7, 2, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-21 15:00:00', 7, 7, 9, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-21 15:00:00', 7, 12, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-21 15:00:00', 7, 1, 4, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-21 15:00:00', 7, 3, 11, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-21 15:00:00', 7, 5, 10, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-25 15:00:00', 8, 8, 12, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-25 15:00:00', 8, 5, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-25 15:00:00', 8, 4, 2, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-25 15:00:00', 8, 11, 1, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-25 15:00:00', 8, 6, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-25 15:00:00', 8, 10, 9, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-28 15:00:00', 9, 7, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-28 15:00:00', 9, 9, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-28 15:00:00', 9, 1, 5, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-28 15:00:00', 9, 12, 4, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-28 15:00:00', 9, 3, 10, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-09-28 15:00:00', 9, 2, 11, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-05 15:00:00', 10, 3, 1, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-05 15:00:00', 10, 11, 12, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-05 15:00:00', 10, 5, 2, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-05 15:00:00', 10, 8, 9, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-05 15:00:00', 10, 10, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-05 15:00:00', 10, 4, 7, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-19 15:00:00', 11, 1, 10, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-19 15:00:00', 11, 7, 11, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-19 15:00:00', 11, 2, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-19 15:00:00', 11, 6, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-19 15:00:00', 11, 12, 5, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-19 15:00:00', 11, 9, 4, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-26 15:00:00', 12, 2, 1, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-26 15:00:00', 12, 9, 11, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-26 15:00:00', 12, 6, 4, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-26 15:00:00', 12, 12, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-26 15:00:00', 12, 10, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-10-26 15:00:00', 12, 7, 5, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-02 15:00:00', 13, 3, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-02 15:00:00', 13, 5, 9, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-02 15:00:00', 13, 4, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-02 15:00:00', 13, 11, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-02 15:00:00', 13, 1, 12, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-02 15:00:00', 13, 2, 10, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-09 15:00:00', 14, 12, 2, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-09 15:00:00', 14, 9, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-09 15:00:00', 14, 10, 4, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-09 15:00:00', 14, 7, 1, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-09 15:00:00', 14, 6, 5, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-09 15:00:00', 14, 8, 11, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-23 15:00:00', 15, 5, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-23 15:00:00', 15, 2, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-23 15:00:00', 15, 3, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-23 15:00:00', 15, 1, 9, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-23 15:00:00', 15, 11, 4, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-23 15:00:00', 15, 12, 10, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-30 15:00:00', 16, 9, 2, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-30 15:00:00', 16, 10, 11, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-30 15:00:00', 16, 8, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-30 15:00:00', 16, 4, 5, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-30 15:00:00', 16, 7, 12, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-11-30 15:00:00', 16, 6, 1, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-07 15:00:00', 17, 1, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-07 15:00:00', 17, 3, 4, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-07 15:00:00', 17, 2, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-07 15:00:00', 17, 5, 11, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-07 15:00:00', 17, 7, 10, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-07 15:00:00', 17, 12, 9, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-14 15:00:00', 18, 8, 2, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-14 15:00:00', 18, 9, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-14 15:00:00', 18, 6, 12, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-14 15:00:00', 18, 4, 1, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-14 15:00:00', 18, 11, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2024-12-14 15:00:00', 18, 10, 5, '')");

            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-15 15:00:00', 19, 12, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-15 15:00:00', 19, 3, 5, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-15 15:00:00', 19, 2, 4, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-15 15:00:00', 19, 1, 11, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-15 15:00:00', 19, 7, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-15 15:00:00', 19, 9, 10, '')");
            
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-22 15:00:00', 20, 8, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-22 15:00:00', 20, 6, 9, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-22 15:00:00', 20, 5, 1, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-22 15:00:00', 20, 4, 12, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-22 15:00:00', 20, 10, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-02-22 15:00:00', 20, 11, 2, '')");
            
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-01 15:00:00', 21, 1, 3, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-01 15:00:00', 21, 12, 11, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-01 15:00:00', 21, 2, 5, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-01 15:00:00', 21, 9, 8, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-01 15:00:00', 21, 6, 10, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-01 15:00:00', 21, 7, 4, '')");
            
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-08 15:00:00', 22, 4, 9, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-08 15:00:00', 22, 5, 12, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-08 15:00:00', 22, 8, 6, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-08 15:00:00', 22, 3, 2, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-08 15:00:00', 22, 11, 7, '')");
            migrationBuilder.Sql("INSERT INTO Matches (Result, MatchDateTime, FixtureId, HomeTeamId, AwayTeamId, Outcome) VALUES ('- : -', '2025-03-08 15:00:00', 22, 10, 1, '')");

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
