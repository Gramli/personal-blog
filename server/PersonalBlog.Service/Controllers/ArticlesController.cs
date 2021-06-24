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
            //return await _articleHeaderDataAccess.Fetch();

            return new List<ArticleHeader>()
            {
                new ArticleHeader()
                {
                    ArticleId = 0,
                    Name = "Header1",
                    Created = DateTime.Now,
                    Description =
                        "Kopáči z celé země zaplavili vesnici v Jihoafrické republice poté, co byl v oblasti nalezen neznámý kámen. Hledači věří, že jde o diamanty, které změní jejich životy. Zatím ale nikdo neví, co je průhledný kámen zač.ČlánekVesnice KwaHlathi na východě Jihoafrické republiky propadla „diamantové“ horečce. Podle CNN bylo v pondělí na místě přes tisíc hledačů, BBC v reportáži uvádí, že jsou jich dokonce tisíce",
                    Id = 0,
                }
            };
        }

        [EnableCors("CorsApi")]
        [HttpGet("/{articleId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<object> GetArticle(int articleId)
        {
            //return await _articleDataAccess.GetArticle(articleId);

            return new 
            {
                ArticleId = 0,
                ArticleHeaderId = 0,
                Name = "Header1",
                Created = DateTime.Now,
                Description =
                    "Kopáči z celé země zaplavili vesnici v Jihoafrické republice poté, co byl v oblasti nalezen neznámý kámen. Hledači věří, že jde o diamanty, které změní jejich životy. Zatím ale nikdo neví, co je průhledný kámen zač.ČlánekVesnice KwaHlathi na východě Jihoafrické republiky propadla „diamantové“ horečce. Podle CNN bylo v pondělí na místě přes tisíc hledačů, BBC v reportáži uvádí, že jsou jich dokonce tisíce",
                Content = "<h1>Ahoj</h1><p>Neco Neco Neco Neco</p>"
            };
        }
    }
}
