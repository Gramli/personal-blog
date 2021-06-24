using PersonalBlog.DataProvider.DataAccess;
using PersonalBlog.DataProvider.DataAccess.MSSQL;
using SimpleInjector;

namespace PersonalBlog.DataProvider
{
    public static class ContainerInitializer
    {
        public static void InitializeDataProvider(this Container container, string connectionString)
        {
            container.Register<IDbContext>( () => new MSSQLDbContext(connectionString));
            container.Register<IArticleHeaderDataAccess, ArticleHeaderDataAccess>();
            container.Register<IArticleDataAccess, ArticleDataAccess>();
        }
    }
}
