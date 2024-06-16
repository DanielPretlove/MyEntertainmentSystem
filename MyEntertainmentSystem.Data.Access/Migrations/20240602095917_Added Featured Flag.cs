using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyEntertainmentSystem.Data.Access.Migrations
{
    /// <inheritdoc />
    public partial class AddedFeaturedFlag : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Featured",
                table: "Hobbies",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Featured",
                table: "Hobbies");
        }
    }
}
