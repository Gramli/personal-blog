using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PersonalBlog.DataModel;

namespace PersonalBlog.DataProvider.DataAccess
{
    public interface IArticleHeaderDataAccess
    {
        Task<IEnumerable<ArticleHeader>> Fetch();
    }
}
