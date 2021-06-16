using Dapper;
using PersonalBlog.DataModel;
using System.Threading.Tasks;

namespace PersonalBlog.DataProvider.DataAccess.MSSQL
{
    internal class ArticleDataAccess : DataAccessBase, IArticleDataAccess
    {
        public ArticleDataAccess(IDbContext dbContext)
            : base(dbContext)
        {
        }

        public async Task<Article> GetArticle(int articleId)
        {
            using var connection = _dbContext.CreateDbConnection();
            var query = "select * from Article where Id = @id";
            return await connection.QueryFirstAsync<Article>(query, new { Id = articleId });
        }
    }
}
