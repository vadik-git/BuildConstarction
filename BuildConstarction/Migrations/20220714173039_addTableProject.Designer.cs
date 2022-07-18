﻿// <auto-generated />
using BuildConstarction.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BuildConstarction.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220714173039_addTableProject")]
    partial class addTableProject
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("BuildConstarction.Models.OurProject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("OurProjects");
                });

            modelBuilder.Entity("BuildConstarction.Models.ProjectImage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OurProjectId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OurProjectId");

                    b.ToTable("ProjectImages");
                });

            modelBuilder.Entity("BuildConstarction.Models.ProjectImage", b =>
                {
                    b.HasOne("BuildConstarction.Models.OurProject", "OurProject")
                        .WithMany("Images")
                        .HasForeignKey("OurProjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("OurProject");
                });

            modelBuilder.Entity("BuildConstarction.Models.OurProject", b =>
                {
                    b.Navigation("Images");
                });
#pragma warning restore 612, 618
        }
    }
}
