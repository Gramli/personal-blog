using Dapper;
using PersonalBlog.DataModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PersonalBlog.DataProvider.DataAccess.MSSQL
{
    internal class ArticleHeaderDataAccess : DataAccessBase, IArticleHeaderDataAccess
    {
        public ArticleHeaderDataAccess(IDbContext dbContext)
            :base(dbContext)
        {

        }

        public async Task<IEnumerable<ArticleHeader>> Fetch()
        {
            using var connection = _dbContext.CreateDbConnection();
            var query = "select * from ArticleHeader";
            return await connection.QueryAsync<ArticleHeader>(query);
        }

        public async Task<IEnumerable<ArticleHeader>> FetchNotSubmited()
        {
            using var connection = _dbContext.CreateDbConnection();
            var query = @"select ArticleHeader.* from ArticleHeader 
                          join Article on ArticleHeader.ArticleId = Article.Id";
            return await connection.QueryAsync<ArticleHeader>(query);
        }
    }
}
