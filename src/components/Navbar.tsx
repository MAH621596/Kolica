import Logo from "../assets/Logo.svg";
import { navbarLinks, mobileNavbarLinks } from '@/helper/data';
import { useState, useEffect } from "react";
import type { NavbarProps } from "@/components/types";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  className,
  // logStatus,
}: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (linkName: string) => {
    if (linkName === "/post-an-add") {
      navigate(linkName);
    //   if (!logStatus) {
    //     navigate("/login");
    //   } else {
    //     navigate("/post-jwqbdq");
    //   }
    // } else {
    //   navigate(linkName);
    // }
  }};

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className={`w-full bg-[#253A86] text-white h-[86px] p-0 flex items-center relative ${className}`}>
      <div className="w-full max-w-[972px] mx-auto px-[30px] md:px-4 lg:px-0">

        {/* Top bar */}
        <div className="flex items-center justify-between w-full">

          {/* Logo */}
          <Link to="https://kolica-landing-page.web.app">
            <img src={Logo} alt="logo" className="w-[104px] h-[38px]" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-[20px] items-center">
            {navbarLinks.map((link, index) => {
              return (
                <span key={index} onClick={() => handleClick(link.href)} className="cursor-pointer flex items-center justify-start gap-[10px] font-semibold text-lg leading-[22px] transition-all duration-200 hover:opacity-80">
                  <img src={link.icon} alt={link.icon} className="w-[21px] h-[20px]" />
                  {link.link_text}
                </span>)
            })}

            {/* {logStatus && <span
              className="cursor-pointer flex items-center justify-start gap-[10px] font-semibold text-lg leading-[22px] transition-all duration-200 hover:opacity-80"
              onClick={() => {
                localStorage.setItem("auth", "false");
                window.location.reload(); // quick reset
              }}
            >
              Logout
            </span>} */}
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">

              {/* Hamburger */}
              <span
                className={`absolute transition-all duration-300 ease-in-out ${open ? "opacity-0 rotate-180 scale-50" : "opacity-100 rotate-0 scale-100"
                  }`}
              >
                ☰
              </span>

              {/* Close */}
              <span
                className={`absolute transition-all duration-300 ease-in-out ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-50"
                  }`}
              >
                ✕
              </span>

            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden opacity-100 fixed top-[86px] left-0 right-0 bottom-0 bg-white p-4 z-50 transform transition-all duration-300 ease-in-out 
          ${open
          ? "translate-x-0"
          : "-translate-x-full pointer-events-none"
        }`}>


        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[20px]">
          {mobileNavbarLinks.map((header, index) => {
            return (
              <Link to={header.href} key={index} className="border border-[#C8C8C8] rounded-[10px] bg-white cursor-pointer group">
                <div className="flex items-center justify-center p-2">
                  <img src={header.icon} alt={header.link_text} className="w-[21px] h-[20px] group-hover:text-gray-500" />
                </div>
                <div className="border-t-1 border-[#C8C8C8] bg-[#F1F1F1] rounded-b-[10px] text-center text-black font-normal text-md p-2 group-hover:text-gray-500">
                  {header.link_text}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="grid grid-cols-2 gap-[20px] mt-4">
          {navbarLinks.map((link, index) => {
            return (
              <Link to={link.href} key={index} className={`flex items-center justify-start gap-[10px] font-semibold text-lg leading-[22px] transition-all duration-200 hover:opacity-80 ${link.link_text == "Saved" ? "col-span-2" : ""}`}>
                <Button text={link.link_text} icon={<img src={link.icon} alt={link.icon} className="w-[21px] h-[20px]" />} className={`!bg-[#B1222C] border-[#B1222C] justify-start font-normal text-xs !text-white h-[41px] cursor-pointer w-full`} />
              </Link>)
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;