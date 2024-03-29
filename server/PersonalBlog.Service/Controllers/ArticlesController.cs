﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalBlog.DataModel;
using PersonalBlog.DataProvider.DataAccess;
using PersonalBlog.Service.DataContracts;
using System.Collections.Generic;
using System.Threading.Tasks;

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
            var articleHeader = await _articleHeaderDataAccess.Get(article.ArticleId);

            return new FullArticle
            {
                ArticleId = article.ArticleId,
                ArticleHeaderId = articleHeader.ArticleHeaderId,
                Name = articleHeader.Name,
                Created = articleHeader.Created,
                Description = articleHeader.Description,
                Content = article.Content,
                Submited = articleHeader.Submited,
            };
        }
    }
}
