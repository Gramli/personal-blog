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

        public Task AddArticleHeader(ArticleHeader articleHeader)
        {
            throw new System.NotImplementedException();
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
            var query = @"select ArticleHeader.* from ArticleHeader where Submited = true";
            return await connection.QueryAsync<ArticleHeader>(query);
        }

        public Task<ArticleHeader> Get(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
