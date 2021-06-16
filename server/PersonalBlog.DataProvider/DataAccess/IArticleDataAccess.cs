using System.Threading.Tasks;
using PersonalBlog.DataModel;

namespace PersonalBlog.DataProvider.DataAccess
{
    public interface IArticleDataAccess
    {
        Task<Article> GetArticle(int articleId);
    }
}
