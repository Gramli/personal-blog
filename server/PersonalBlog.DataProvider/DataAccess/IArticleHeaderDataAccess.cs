using PersonalBlog.DataModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PersonalBlog.DataProvider.DataAccess
{
    public interface IArticleHeaderDataAccess
    {
        Task<IEnumerable<ArticleHeader>> Fetch();
        Task<IEnumerable<ArticleHeader>> FetchNotSubmited();
    }
}
