using MongoDB.Driver;
using PersonalBlog.DataModel;
using PersonalBlog.DataProvider.DataAccess.MongoDB.ModelExtensions;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalBlog.DataProvider.DataAccess.MongoDB
{
    internal class ArticleDataAccess : DataAccessBase, IArticleDataAccess
    {
        public ArticleDataAccess(IMongoDbContext mongoDbContext)
            : base(mongoDbContext)
        {

        }

        public Task<Article> GetArticle(int articleId)
        {
            return Task.Factory.StartNew(() =>
            {
                var filter = Builders<MongoArticle>.Filter.Eq("ArticleId", articleId);
                return (Article)_mongoDbContext.GetDatabase().GetCollection<MongoArticle>("Articles").Find(filter).SingleOrDefault();
            });
        }
    }
}
