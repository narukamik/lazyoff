using System;

namespace Lazyoff.Models.DTO
{
    public class UserOutputDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public byte[] Image { get; set; }
        public string AuthenticationToken { get; set; }
    }
}
