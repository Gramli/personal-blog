using MongoDB.Driver;
using PersonalBlog.DataModel;
using PersonalBlog.DataProvider.DataAccess.MongoDB.ModelExtensions;
using System;
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

        private async Task<IEnumerable<ArticleHeader>> FetchWithSubmitedFiler(bool submited)
        {
            var result = await Task.Factory.StartNew(() =>
            {
                var filter = Builders<MongoArticleHeader>.Filter.Eq("Submited", submited);
                return _mongoDbContext.GetDatabase().GetCollection<MongoArticleHeader>("ArticleHeaders").Find(filter)
                    .Limit(10).ToEnumerable().Cast<ArticleHeader>();
            });

            return result;
        }

        public Task<ArticleHeader> Get(int articleId)
        {
            return Task.Factory.StartNew(() =>
            {
                var filter = Builders<MongoArticleHeader>.Filter.Eq("ArticleId", articleId);
                return (ArticleHeader)_mongoDbContext.GetDatabase().GetCollection<MongoArticleHeader>("ArticleHeaders").Find(filter).Single();
            });
        }

        public Task AddArticleHeader(ArticleHeader articleHeader)
        {
            var mongoArticleHeader = new MongoArticleHeader(articleHeader);
            var id = Convert.ToInt32(_mongoDbContext.GetDatabase().GetCollection<MongoArticleHeader>("ArticleHeaders").EstimatedDocumentCount() + 1);
            mongoArticleHeader.ArticleHeaderId = id;
            return _mongoDbContext.GetDatabase().GetCollection<MongoArticleHeader>("ArticleHeaders").InsertOneAsync(mongoArticleHeader);
        }
    }
}
