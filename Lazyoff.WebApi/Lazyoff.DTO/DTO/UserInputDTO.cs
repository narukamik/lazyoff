﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Lazyoff.Models.DTO
{
    public class UserInputDTO
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public byte[] Image { get; set; }
    }
}
