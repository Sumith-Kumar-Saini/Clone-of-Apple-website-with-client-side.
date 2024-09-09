import links from "../../utils/NavLinks";

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="MenuBar w-full h-full">
      <div className="container py-16 px-12 relative w-full h-full">
        <div className="w-full">
          <ul className="flex flex-col items-start justify-start gap-6">
            {links.map(({ label, url }, idx: number) => {
              return (
                <li
                  className="flex items-center justify-center cursor-pointer"
                  key={idx}
                >
                  <a
                    href={url}
                    style={isOpen ? {transition: `ease-in-out ${idx*0.07}s`} : {transition: `ease-in-out ${(links.length - idx)*0.1}s`}}
                    className={`text-[1.6875rem] font-bold  leading-none font-inter text-zinc-200  duration-500 ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`absolute pointer-events-none bottom-0 duration-300 left-0 w-dvw h-[200%] bg-gradient-to-t from-black to-transparent ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default MobileMenu;
