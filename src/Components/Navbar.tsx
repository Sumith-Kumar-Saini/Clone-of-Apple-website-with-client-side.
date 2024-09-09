import { useContext, useState } from "react";
import { FaApple } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { PiBagSimpleLight } from "react-icons/pi";
import HamburgerMenu from "./UI/HamburgerMenu";
import MobileMenu from "./UI/MobileMenu";
import links from "../utils/NavLinks";
import { WindowContext, WindowSize } from "./Contexts/windowContext";

const Navbar = () => {
  // This code is only necessary for Phones
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const windowSize = useContext<WindowSize | null>(WindowContext);
  if (windowSize === null) throw new Error("The window size is null");
  const isMobile = windowSize.width <= windowSize.tabletWidth;
  return (
    <div
      className={`w-full fixed z-50 top-0 left-0 ${
        isMobile ? "h-12" : "h-11"
      } bg-zinc-900/75 backdrop-blur-sm flex items-center justify-center`}
    >
      {isMobile ? (
        <div
          className={`MenuBar absolute z-10 w-full bg-zinc-900 left-0 top-0 duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "h-dvh" : "h-0"
          }`}
        >
          <MobileMenu isOpen={isMenuOpen} />
        </div>
      ) : (
        <div className=""></div>
      )}
      <div className="MainNavbar w-full max-w-[56rem] h-full flex items-center justify-between relative z-20">
        <div
          className={`w-full flex items-center justify-between duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className={`logo ${
              isMobile ? "h-12 w-12" : "h-11 w-11"
            } flex items-center justify-center`}
          >
            <FaApple className="text-zinc-200 text-[1.3rem] mb-1 cursor-pointer" />
          </div>
          {!isMobile && (
            <div
              className={`w-full ${
                isMobile ? "h-12" : "h-11"
              } flex items-center justify-center top-0 right-0`}
            >
              {links.map((link, idx) => {
                return (
                  <a
                    href={link.url}
                    key={idx}
                    className={`text-xs font-light text-zinc-200 duration-300 ease-in-out ${
                      idx === links.length - 1 ? "ml-4" : "ml-6"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
          <div className="flex">
            <div
              className={`${
                isMobile ? "h-12 w-12" : "h-11 w-11"
              } flex items-center justify-center cursor-pointer`}
            >
              <IoSearchOutline className="text-zinc-200 text-[1.3rem] mb-1" />
            </div>
            <div
              className={`${
                isMobile ? "h-12 w-12" : "h-11 w-11"
              } flex items-center justify-center cursor-pointer`}
            >
              <PiBagSimpleLight className="text-zinc-200 text-[1.3rem] mb-1 font-bold" />
            </div>
          </div>
        </div>
        {isMobile && (
          <div className="Search w-12 h-12 flex items-center justify-center top-0 right-0">
            <HamburgerMenu MenuToggle={setIsMenuOpen} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
