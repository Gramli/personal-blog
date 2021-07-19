using MongoDB.Driver;
using PersonalBlog.DataModel;
using PersonalBlog.DataProvider.DataAccess.MongoDB.ModelExtensions;
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
            return FetchWithSubmitedFiler(true);
        }

        public Task<IEnumerable<ArticleHeader>> FetchNotSubmited()
        {
            return FetchWithSubmitedFiler(false);
        }

        private Task<IEnumerable<ArticleHeader>> FetchWithSubmitedFiler(bool submited)
        {
            return Task.Factory.StartNew(() =>
            {
                var filter = Builders<MongoArticleHeader>.Filter.Eq("Submited", submited);
                return _mongoDbContext.GetDatabase().GetCollection<MongoArticleHeader>("ArticleHeaders").Find(filter)
                    .Limit(10).ToEnumerable().Cast<ArticleHeader>();
            });
        }

        public Task<ArticleHeader> Get(int id)
        {
            return Task.Factory.StartNew(() =>
            {
                var filter = Builders<MongoArticleHeader>.Filter.Eq("ArticleHeaderId", id);
                return (ArticleHeader)_mongoDbContext.GetDatabase().GetCollection<MongoArticleHeader>("ArticleHeaders").Find(filter).Single();
            });
        }
    }
}
