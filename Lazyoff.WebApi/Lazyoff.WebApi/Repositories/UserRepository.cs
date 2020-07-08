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

        public UserOutputDTO GetById(UserInputDTO user)
        {
            var srcUser = ctx.User.FirstOrDefault(x => x.Id == user.Id);

            return new UserOutputDTO
            {
                Id = srcUser.Id,
                Name = srcUser.Name,
                Email = srcUser.Email,
                Image = srcUser.Image,
                Coins = (int)srcUser.Coins,
                Trophies = (int)srcUser.Trophies,
                Level = (int)srcUser.Level
            };
        }

        public UserOutputDTO GetByEmailAndPassword(string email, string password)
        {
            var user = ctx.User.FirstOrDefault(x => x.Email == email && x.Password == Helpers.To256(password));

            if (user == null)
                return null;

            return new UserOutputDTO
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email,
                Image = user.Image,
                Level = (int)user.Level,
                Coins = (int)user.Coins,
                Trophies = (int)user.Trophies
            };
        }
    }
}
