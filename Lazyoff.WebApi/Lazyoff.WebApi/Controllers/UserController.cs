using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lazyoff.Models.DTO;
using Lazyoff.WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Lazyoff.WebApi.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private UserRepository _userRepository { get; set; }

        public UserController()
        {
            _userRepository = new UserRepository();
        }

        [HttpPost]
        public IActionResult Insert(CadastroDTO user)
        {
            try
            {
                _userRepository.Create(user);
                return StatusCode(202);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
