using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Lazyoff.Models.DTO;
using Lazyoff.Models.ViewModels;
using Lazyoff.WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Lazyoff.WebApi.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private UserRepository _userRepository { get; set; }

        public LoginController()
        {
            _userRepository = new UserRepository();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel user)
        {
            try
            {
                var loggedUser = _userRepository.GetByEmailAndPassword(user.Email, user.Password);

                if (loggedUser == null)
                    return NoContent();

                var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Jti, loggedUser.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, loggedUser.Email)
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("lazyoff-chave-autenticao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                // Gera o token
                var token = new JwtSecurityToken(
                    issuer: "Lazyoff.WebApi",
                    audience: "Lazyoff.WebApi",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(15),
                    signingCredentials: creds
                );

                loggedUser.AuthenticationToken = new JwtSecurityTokenHandler().WriteToken(token);

                // Retorna Ok com o token
                return Ok(loggedUser);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
