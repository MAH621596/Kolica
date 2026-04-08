import Logo from "../assets/Logo.svg";
import { navbarLinks } from '@/helper/data';
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#253A86] text-white shadow-md max-h-[86px]">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-8 py-4 w-full">

        {/* Logo */}
        <img src={Logo} alt="logo" className="w-[104px] h-[38px]" />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-[20px] items-center">

          {navbarLinks.map((link, index) => {
            return (
              <a key={index} className="flex items-center justify-start gap-[10px] font-semibold text-lg leading-[22px]">
                <img src={link.icon} alt={link.icon} className="w-[21px] h-[20px]" />
                {link.link_text}
              </a>)
          })}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-[20px] absolute top-[86px] left-0 bg-[#2770B8] w-full z-50">

          {navbarLinks.map((link, index) => {
            return (
              <a key={index} className="flex items-center justify-start gap-[10px] font-semibold text-lg leading-[22px]">
                <img src={link.icon} alt={link.icon} className="w-[21px] h-[20px]" />
                {link.link_text}
              </a>)
          })}
        </div>
      )}

    </nav>
  );
}

export default Navbar;