using System.Data;
using System.Data.SqlClient;

namespace PersonalBlog.DataProvider
{
    internal class MSSQLDbContext : IDbContext
    {
        public string ConnectionString { get; }

        public MSSQLDbContext(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public IDbConnection CreateDbConnection()
        {
            return new SqlConnection(ConnectionString);
        }
    }
}
