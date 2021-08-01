using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PersonalBlog.DataModel;

namespace PersonalBlog.DataProvider.DataAccess.MongoDB.ModelExtensions
{
    internal class MongoArticleHeader : ArticleHeader
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId _id { get; set; }

        public MongoArticleHeader(ArticleHeader articleHeader)
        {
            _id = ObjectId.GenerateNewId();
            ArticleHeaderId = articleHeader.ArticleHeaderId;
            ArticleId = articleHeader.ArticleId;
            Description = articleHeader.Description;
            Name = articleHeader.Name;
            Submited = articleHeader.Submited;
            KeywordIds = articleHeader.KeywordIds;
        }
    }
}
