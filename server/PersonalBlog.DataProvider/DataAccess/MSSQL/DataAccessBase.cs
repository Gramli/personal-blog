namespace PersonalBlog.DataProvider.DataAccess.MSSQL
{
    internal abstract class DataAccessBase
    {
        protected readonly IDbContext _dbContext;

        protected DataAccessBase(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
