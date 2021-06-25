namespace PersonalBlog.DataProvider.DataAccess.MongoDB
{
    internal abstract class DataAccessBase
    {
        protected readonly IMongoDbContext _mongoDbContext;

        protected DataAccessBase(IMongoDbContext mongoDbContext)
        {
            _mongoDbContext = mongoDbContext;
        }
    }
}
