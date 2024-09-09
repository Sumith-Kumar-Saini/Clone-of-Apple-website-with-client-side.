import { useContext } from "react";
import Hero from "./UI/Hero";
import { WindowContext, WindowSize } from "./Contexts/windowContext";
import HomeiPhone from "./UI/HomeiPhone";

const HomePage = () => {
  const windowSize = useContext<WindowSize | null>(WindowContext);
  if (windowSize === null) throw new Error("The window size is null.");
  const isMobile = windowSize.width <= windowSize.mobileWidth;
  return (
    <div className="w-full">
      <section
        className={`w-full bg-black overflow-y-hidden ${
          isMobile ? "h-[34rem]" : "h-[37rem]"
        } `}
      >
        <Hero />
      </section>
      <section
        className={`w-full bg-black overflow-y-hidden -mt-1 ${
          isMobile ? "h-[30rem]" : "h-[37rem]"
        } `}
      >
        <HomeiPhone  />
      </section>
    </div>
  );
};

export default HomePage;
