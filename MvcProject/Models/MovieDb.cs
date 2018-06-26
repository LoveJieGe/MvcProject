using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcProject.Models
{
    public class MovieDb : DbContext
    {
        public MovieDb() : base("name=connString") {

        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Movie> Movies { get; set; }
    }
}