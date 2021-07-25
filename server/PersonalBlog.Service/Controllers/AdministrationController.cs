using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using FirebaseAdmin.Auth;

namespace PersonalBlog.Service.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AdministrationController : ControllerBase
    {
        // GET api/<ArticlesAdministrationController>/5
        [HttpGet("Login")]
        public async Task<bool> Get([FromBody]string idToken)
        {
            var decodedToken = await FirebaseAuth.DefaultInstance
                .VerifyIdTokenAsync(idToken);
            string uid = decodedToken.Uid;

            return false;
        }
    }
}
