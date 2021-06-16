using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalBlog.DataModel;
using PersonalBlog.DataProvider.DataAccess;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace PersonalBlog.Service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticlesController : ControllerBase
    {
        private readonly ILogger<ArticlesController> _logger;
        private readonly IArticleHeaderDataAccess _articleHeaderDataAccess;
        private readonly IArticleDataAccess _articleDataAccess;

        public ArticlesController(ILogger<ArticlesController> logger, 
            IArticleHeaderDataAccess articleHeaderDataAccess,
            IArticleDataAccess articleDataAccess)
        {
            _logger = logger;
            _articleHeaderDataAccess = articleHeaderDataAccess;
            _articleDataAccess = articleDataAccess;
        }

        [HttpGet("articles")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IEnumerable<ArticleHeader>> FetchHeaders()
        {
            return await _articleHeaderDataAccess.Fetch();
        }

        [HttpGet("articles/{article}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<Article> GetArticle([FromRoute] int articleId)
        {
            return await _articleDataAccess.GetArticle(articleId);
        }
    }
}
