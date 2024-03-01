using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public class ApplicationDbContext:DbContext


    //Entity Framework is an Object-Relational Mapping (ORM) framework for working with databases in .NET applications
    //The DbContext class is a part of Entity Framework and is used to interact with a database
    //It represents a session with the database, providing a set of methods to query


    {

        //1.create a class that inherits from DbContext and represents the database context for the application.
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
            
        }

        public DbSet<ProductEntity> Products { get; set; }
    }
}
