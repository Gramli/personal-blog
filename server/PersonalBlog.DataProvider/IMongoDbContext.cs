using MongoDB.Driver;

namespace PersonalBlog.DataProvider
{
    interface IMongoDbContext
    {
        string ConnectionString { get; }
        IMongoDatabase GetDatabase();
    }
}
