namespace MvcProject.Migrations
{
    using MvcProject.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MvcProject.Models.MovieDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MvcProject.Models.MovieDb context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
            context.Movies.AddOrUpdate(new Movie
                {
                    Title = "Start Wars",
                    ReleaseYear = 1977,
                    Runtime = 121
                },
                new Movie
                {
                    Title = "Inception",
                    ReleaseYear = 2010,
                    Runtime = 148
                },
                new Movie
                {
                    Title = "Toy sory",
                    ReleaseYear = 1995,
                    Runtime = 81
            });
        }
    }
}
