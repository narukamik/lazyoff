using Lazyoff.Models.DTO;
using Lazyoff.WebApi.Database;
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
        public void Create(UserInputDTO u)
        {
            var user = new User
            {
                Name = u.Name,
                Email = u.Email,
                Password = u.Password,
                Image = u.Image,
                Coins = 0,
                Level = 1
            };

            ctx.User.Add(user);
            ctx.SaveChanges();
        }

        public User GetById(UserInputDTO user)
        {
            return ctx.User.FirstOrDefault(x => x.Id == user.Id);
        }

        public User GetByEmailAndPassword(string email, string password)
        {
            return ctx.User.FirstOrDefault(x => x.Email == email && x.Password == Helpers.To256(password));
        }
    }
}
