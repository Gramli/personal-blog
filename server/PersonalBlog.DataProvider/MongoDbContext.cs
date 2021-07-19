using System.Security.Authentication;
using MongoDB.Driver;

namespace PersonalBlog.DataProvider
{
    public class MongoDbContext : IMongoDbContext
    {
        public string ConnectionString { get; }
        private readonly string databaseName = "personal_blog";

        public MongoDbContext(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public IMongoDatabase GetDatabase()
        {
            var settings = MongoClientSettings.FromConnectionString(ConnectionString);
            var client = new MongoClient(settings);
            return client.GetDatabase(databaseName);
        }
    }
}
