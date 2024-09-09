import React, { useEffect, useState, createContext } from "react";

export interface WindowSize {
  width: number;
  height: number;
  mobileWidth: 768;
  tabletWidth: 896;
  isMobile?: boolean;
  //...other props as needed
}

export const WindowContext = createContext<WindowSize | null>(null);

const WindowProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    mobileWidth: 768,
    tabletWidth: 896,
    isMobile: window.innerWidth < 768,
    //...other props as needed
  });

  const handleResize = () => {
    setWindowSize({
      ...windowSize,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Clean up
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <WindowContext.Provider value={windowSize}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowProvider;
