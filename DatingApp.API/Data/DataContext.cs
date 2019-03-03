using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Like>()
            .HasKey(x => new { x.LikerId, x.LikeeId });

            builder.Entity<Like>()
            .HasOne(x => x.Likee)
            .WithMany(x => x.Likers)
            .HasForeignKey(x => x.LikeeId)
            .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Like>()
            .HasOne(x => x.Liker)
            .WithMany(x => x.Likees)
            .HasForeignKey(x => x.LikerId)
            .OnDelete(DeleteBehavior.Restrict);
        }

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Like> Likes { get; set; }


    }
}