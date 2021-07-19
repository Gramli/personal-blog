using PersonalBlog.DataProvider.DataAccess;
using SimpleInjector;

namespace PersonalBlog.DataProvider
{
    public static class ContainerInitializer
    {
        public static void InitializeDataProvider(this Container container, string connectionString)
        {
            container.Register<IDbContext>( () => new MSSQLDbContext(connectionString));
            container.Register<IArticleHeaderDataAccess, DataAccess.MSSQL.ArticleHeaderDataAccess>();
            container.Register<IArticleDataAccess, DataAccess.MSSQL.ArticleDataAccess>();
        }

        public static void InitializeMongoDBDataProvider(this Container container, string connectionString)
        {
            container.Register<IMongoDbContext>(() => new MongoDbContext(connectionString), Lifestyle.Singleton);
            container.Register<IArticleHeaderDataAccess, DataAccess.MongoDB.ArticleHeaderDataAccess>();
            container.Register<IArticleDataAccess, DataAccess.MongoDB.ArticleDataAccess>();
        }
    }
}
