using System.Data;

namespace PersonalBlog.DataProvider
{
    public interface IDbContext
    {
        string ConnectionString { get; }
        IDbConnection CreateDbConnection();
    }
}
