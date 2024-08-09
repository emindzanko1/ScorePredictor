using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddPlayerIdToPredictionMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Predictions_Players_ScorerId",
                table: "Predictions");

            migrationBuilder.DropIndex(
                name: "IX_Predictions_ScorerId",
                table: "Predictions");

            migrationBuilder.DropColumn(
                name: "ScorerId",
                table: "Predictions");

            migrationBuilder.RenameColumn(
                name: "Result",
                table: "Predictions",
                newName: "Results");

            migrationBuilder.AddColumn<int>(
                name: "PlayerId",
                table: "Predictions",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Predictions_PlayerId",
                table: "Predictions",
                column: "PlayerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Predictions_Players_PlayerId",
                table: "Predictions",
                column: "PlayerId",
                principalTable: "Players",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Predictions_Players_PlayerId",
                table: "Predictions");

            migrationBuilder.DropIndex(
                name: "IX_Predictions_PlayerId",
                table: "Predictions");

            migrationBuilder.DropColumn(
                name: "PlayerId",
                table: "Predictions");

            migrationBuilder.RenameColumn(
                name: "Results",
                table: "Predictions",
                newName: "Result");

            migrationBuilder.AddColumn<int>(
                name: "ScorerId",
                table: "Predictions",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Predictions_ScorerId",
                table: "Predictions",
                column: "ScorerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Predictions_Players_ScorerId",
                table: "Predictions",
                column: "ScorerId",
                principalTable: "Players",
                principalColumn: "Id");
        }
    }
}
