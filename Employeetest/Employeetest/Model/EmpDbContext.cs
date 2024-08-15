
using Employeetest.Model;
using Microsoft.EntityFrameworkCore;

namespace Employeetest.Controllers
{
    public class EmpDbContext : DbContext
    {

        public static string ConnectionString { get; set; }
        public EmpDbContext()
        {

        }
        public EmpDbContext(DbContextOptions<EmpDbContext> options) : base(options)
        { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
     => optionsBuilder.UseSqlServer(ConnectionString);

        #region Table

        public DbSet<Emp> tblEmp { get; set; }

        #endregion
    }
}

