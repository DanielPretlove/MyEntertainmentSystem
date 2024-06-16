using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyEntertainmentSystem.Data.Access.Migrations
{
    /// <inheritdoc />
    public partial class UpdatingMigrationforHobbyDataModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Hobbies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "Hobbies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Hobbies");

            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "Hobbies");
        }
    }
}
