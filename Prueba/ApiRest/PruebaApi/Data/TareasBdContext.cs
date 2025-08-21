using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using PruebaApi.Models;

namespace PruebaApi.Data;

public partial class TareasBdContext : DbContext
{
    public TareasBdContext()
    {
    }

    public TareasBdContext(DbContextOptions<TareasBdContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Estado> Estados { get; set; }

    public virtual DbSet<Tarea> Tareas { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Estado>(entity =>
        {
            entity.HasKey(e => e.EstadoId).HasName("PK__Estado__FEF86B00E868FADF");

            entity.ToTable("Estado");

            entity.Property(e => e.EstadoId).ValueGeneratedNever();
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Tarea>(entity =>
        {
            entity.HasKey(e => e.TareaId).HasName("PK__Tarea__5CD83671030E6C23");

            entity.ToTable("Tarea");

            entity.Property(e => e.TareaId).HasColumnName("TareaID");
            entity.Property(e => e.Titulo)
                .HasMaxLength(200)
                .IsUnicode(false);

         
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
