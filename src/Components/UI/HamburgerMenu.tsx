import { useState } from "react";

interface Props {
  className?: string;
  color?: string;
  MenuToggle: (bool: boolean) => void;
  //...other props as needed
}

const HamburgerMenu = ({ className, color, MenuToggle }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((IMO)=>!IMO);
    MenuToggle(!isMenuOpen);
  };

  return (
    <div
      className={`${className ? className : "w-[1rem] h-[0.625rem]"}`}
      onClick={toggleMenu}
    >
      <div className="relative w-full h-full">
        <div
          // 30%
          className={`line absolute duration-100 -translate-x-1/2 -translate-y-1/2 left-1/2 w-full h-[0.09375rem] ${
            isMenuOpen ? "top-[30%] rotate-45" : "top-0"
          } ${color ? color : "bg-zinc-200"}`}
        ></div>
        <div
          // 55%
          className={`line absolute duration-100 -translate-x-1/2 -translate-y-1/2 left-1/2 w-full h-[0.09375rem] ${
            isMenuOpen ? "bottom-[55%] -rotate-45" : "bottom-0"
          } ${color ? color : "bg-zinc-200"}`}
        ></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
