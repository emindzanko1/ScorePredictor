using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddOutcomeToMatch : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Predictions_Players_PlayerId",
                table: "Predictions");

            migrationBuilder.AlterColumn<int>(
                name: "PlayerId",
                table: "Predictions",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<string>(
                name: "Outcome",
                table: "Matches",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Predictions_Players_PlayerId",
                table: "Predictions",
                column: "PlayerId",
                principalTable: "Players",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Predictions_Players_PlayerId",
                table: "Predictions");

            migrationBuilder.DropColumn(
                name: "Outcome",
                table: "Matches");

            migrationBuilder.AlterColumn<int>(
                name: "PlayerId",
                table: "Predictions",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Predictions_Players_PlayerId",
                table: "Predictions",
                column: "PlayerId",
                principalTable: "Players",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
