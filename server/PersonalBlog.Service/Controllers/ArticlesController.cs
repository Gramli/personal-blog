using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalBlog.DataModel;
using PersonalBlog.DataProvider.DataAccess;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
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

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IEnumerable<ArticleHeader>> FetchHeaders()
        {
            return await _articleHeaderDataAccess.Fetch();
        }

        [HttpGet("/NotSubmited")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IEnumerable<ArticleHeader>> FetchNotSubmitedHeaders()
        {
            return await _articleHeaderDataAccess.FetchNotSubmited();
        }

        [HttpGet("/{articleId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<object> GetArticle(int articleId)
        {

            var article = await _articleDataAccess.GetArticle(articleId);
            var articleHeader = await _articleHeaderDataAccess.Get(article.ArticleHeaderId);

            return new 
            {
                article.ArticleId,
                articleHeader.ArticleHeaderId,
                articleHeader.Name,
                articleHeader.Created,
                articleHeader.Description,
                article.Content
            };
        }
    }
}
