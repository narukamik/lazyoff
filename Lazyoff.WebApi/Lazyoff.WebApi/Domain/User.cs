using System;
using System.Collections.Generic;

namespace Lazyoff.WebApi.Domain
{
    public partial class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public byte[] Image { get; set; }
        public int? Coins { get; set; }
        public int? Trophies { get; set; }
        public int? Level { get; set; }

        public User()
        {
            this.Coins = 0;
            this.Trophies = 0;
            this.Level = 1;
        }
    }
}
