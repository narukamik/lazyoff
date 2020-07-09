using System;

namespace Lazyoff.Models.DTO
{
    public class UserOutputDTO
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public byte[] Image { get; set; }
        public int Coins { get; set; }
        public int Trophies { get; set; }
        public int Level { get; set; }
        public string AuthenticationToken { get; set; }
    }
}
