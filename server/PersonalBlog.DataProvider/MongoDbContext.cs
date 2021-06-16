using MongoDB.Driver;

namespace PersonalBlog.DataProvider
{
    public class MongoDbContext : IMongoDbContext
    {
        public string ConnectionString { get; }

        public MongoDbContext(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public IMongoDatabase GetDatabase()
        {
            var client = new MongoClient(ConnectionString);
            return client.GetDatabase(ConnectionString);
        }
    }
}
