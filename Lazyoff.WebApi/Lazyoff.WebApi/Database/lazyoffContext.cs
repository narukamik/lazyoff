using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Lazyoff.WebApi.Domain;

namespace Lazyoff.WebApi.Database
{
    public partial class lazyoffContext : DbContext
    {
        public lazyoffContext()
        {
        }

        public lazyoffContext(DbContextOptions<lazyoffContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Host=database-1.cxjwhcugdy5z.us-east-2.rds.amazonaws.com;Database=lazyoff;User ID=postgres;Password=fA0hBWyYlT1SN2napkf8");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
