using FirebaseAdmin.Auth;
using Microsoft.AspNetCore.Mvc;
using PersonalBlog.DataModel;
using PersonalBlog.DataProvider.DataAccess;
using PersonalBlog.Service.DataContracts;
using System.Threading.Tasks;

namespace PersonalBlog.Service.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AdministrationController : ControllerBase
    {
        private readonly IArticleHeaderDataAccess _articleHeaderDataAccess;
        private readonly IArticleDataAccess _articleDataAccess;
        public AdministrationController(IArticleHeaderDataAccess articleHeaderDataAccess, IArticleDataAccess articleDataAccess)
        {
            _articleHeaderDataAccess = articleHeaderDataAccess;
            _articleDataAccess = articleDataAccess;
        }

        [HttpPost("addArticle")]
        public async Task Add([FromHeader]string idToken, [FromBody]FullArticle fullArticle)
        {
            if(await Verify(idToken))
            {
                var article = new Article()
                {
                    Content = fullArticle.Content,
                };

                var articleHeader = new ArticleHeader()
                {
                    Name = fullArticle.Name,
                    Description = fullArticle.Description,
                    Created = fullArticle.Created,
                    Submited = fullArticle.Submited,
                };

                var articleId = await _articleDataAccess.AddArticle(article);
                articleHeader.ArticleId = articleId;
                await _articleHeaderDataAccess.AddArticleHeader(articleHeader);
            }
        }

        private async Task<bool> Verify(string idToken)
        {
            try
            {
                var decodedToken = await FirebaseAuth.DefaultInstance
                    .VerifyIdTokenAsync(idToken);
                string uid = decodedToken.Uid;

                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
