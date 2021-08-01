using MongoDB.Driver;
using PersonalBlog.DataModel;
using PersonalBlog.DataProvider.DataAccess.MongoDB.ModelExtensions;
using System;
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

        public async Task<int> AddArticle(Article article)
        {
            var mongoArticle = new MongoArticle(article);
            var id = Convert.ToInt32(_mongoDbContext.GetDatabase().GetCollection<MongoArticle>("Articles").EstimatedDocumentCount() +1);
            mongoArticle.ArticleId = id;
            await _mongoDbContext.GetDatabase().GetCollection<MongoArticle>("Articles").InsertOneAsync(mongoArticle);
            return id;
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
