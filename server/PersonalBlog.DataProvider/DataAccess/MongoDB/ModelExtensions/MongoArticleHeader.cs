using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PersonalBlog.DataModel;

namespace PersonalBlog.DataProvider.DataAccess.MongoDB.ModelExtensions
{
    internal class MongoArticleHeader : ArticleHeader
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId _id { get; set; }
    }
}
