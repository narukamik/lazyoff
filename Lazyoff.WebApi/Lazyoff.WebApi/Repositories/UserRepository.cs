using Lazyoff.Models.DTO;
using Lazyoff.WebApi.Domain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Lazyoff.WebApi.Repositories
{
    public class UserRepository
    {
        private lazyoffContext ctx { get; set; }

        public UserRepository()
        {
            ctx = new lazyoffContext();
        }
        public void Create(CadastroDTO u)
        {
            var user = new Users
            {
                Name = u.Name,
                Email = u.Email,
                Password = Helpers.To256(u.Password),
                Coins = 0,
                Level = 1
            };

            ctx.Users.Add(user);
            ctx.SaveChanges();
        }

        public Users GetById(int id)
        {
            return ctx.Users.FirstOrDefault(x => x.Id == id);
        }

        public Users GetByEmailAndPassword(string email, string password)
        {
            return ctx.Users.FirstOrDefault(x => x.Email == email && x.Password == Helpers.To256(password));
        }
    }
}
