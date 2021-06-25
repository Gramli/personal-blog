using MongoDB.Driver;
using PersonalBlog.DataModel;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalBlog.DataProvider.DataAccess.MongoDB
{
    internal class ArticleDataAccess : DataAccessBase, IArticleDataAccess
    {
        private readonly IMongoDbContext _mongoDbContext;

        public ArticleDataAccess(IMongoDbContext mongoDbContext)
            : base(mongoDbContext)
        {

        }

        public Task<Article> GetArticle(int articleId)
        {
            return Task.Factory.StartNew(() =>
            {
                var filter = Builders<Article>.Filter.Eq("Id", articleId);
                return _mongoDbContext.GetDatabase().GetCollection<Article>("Articles").Find(filter).SingleOrDefault();
            });
        }
    }
}
