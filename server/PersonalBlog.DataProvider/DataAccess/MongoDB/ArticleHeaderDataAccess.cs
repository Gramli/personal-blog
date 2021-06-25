using MongoDB.Driver;
using PersonalBlog.DataModel;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalBlog.DataProvider.DataAccess.MongoDB
{
    internal class ArticleHeaderDataAccess : DataAccessBase, IArticleHeaderDataAccess
    {
        public ArticleHeaderDataAccess(IMongoDbContext mongoDbContext)
        :base(mongoDbContext)
        {

        }

        public Task<IEnumerable<ArticleHeader>> Fetch()
        {
            return Task.Factory.StartNew(() =>
            {
                var filter = Builders<ArticleHeader>.Filter.Empty;
                return _mongoDbContext.GetDatabase().GetCollection<ArticleHeader>("ArticleHeaders").Find(filter)
                    .Limit(10).ToEnumerable();
            });
        }

        public Task<IEnumerable<ArticleHeader>> FetchNotSubmited()
        {
            return Task.Factory.StartNew(() =>
            {
                var articleFilter = Builders<Article>.Filter.Eq("Submited", false);
                var articleIds = _mongoDbContext.GetDatabase().GetCollection<Article>("ArticleHeaders")
                    .Find(articleFilter)
                    .Project(item => new { item.Id})
                    .ToList()
                    .Select(item => item.Id);

                var filter = Builders<ArticleHeader>.Filter.AnyIn("ArticleId", articleIds);
                return _mongoDbContext.GetDatabase().GetCollection<ArticleHeader>("ArticleHeaders").Find(filter)
                    .Limit(10).ToEnumerable();
            });
        }
    }
}
