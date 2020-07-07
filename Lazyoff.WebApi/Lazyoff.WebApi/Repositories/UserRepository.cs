using Lazyoff.Models.DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Lazyoff.WebApi.Repositories
{
    public class UserRepository 
    {
        public void Create(UserInputDTO user)
        {
            //dbo.User.Add(user);
            //dbo.SaveChanges();
        }

        public UserOutputDTO GetById(UserInputDTO user)
        {
            // dbo.User.FirstOrDefault(x => x.User.Id == user.Id);
            return new UserOutputDTO();
        }
    }
}
