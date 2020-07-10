using System;
using System.Collections.Generic;

namespace Lazyoff.WebApi.Domain
{
    public partial class Users
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Coins { get; set; }
        public int Trophies { get; set; }
        public int Level { get; set; }
    }
}
