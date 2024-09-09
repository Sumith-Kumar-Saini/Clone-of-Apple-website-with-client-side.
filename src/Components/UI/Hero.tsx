import { useContext, useEffect, useState } from "react";
import { WindowContext, WindowSize } from "../Contexts/windowContext";
import CTABtn from "./CTABtn";

const Hero = () => {
  const windowSize = useContext<WindowSize | null>(WindowContext);
  if (windowSize === null) throw new Error("The window size is null.");
  const isMobile = windowSize.width <= windowSize.mobileWidth;
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const loadImage = async (isMobile: boolean) => {
    try {
      if (isMobile) {
        const image = await import(
          "../../assets/Images/hero_apple_small_2x.jpg"
        );
        setHeroImage(image.default);
      } else {
        const image = await import("../../assets/Images/hero_apple_large.jpg");
        setHeroImage(image.default);
      }
    } catch (error) {
      console.error("Error loading image:", error);
    }
  };
  useEffect(() => {
    loadImage(isMobile);
  }, [isMobile]);

  if (!heroImage) {
    return <div>Loading image...</div>;
  }

  return (
    <div className={`w-full h-full relative ${isMobile ? "pt-12" : "pt-11"}`}>
      <div className="Image flex items-center justify-center overflow-hidden w-full h-full">
        <img
          className={`object-center object-contain h-full ${
            isMobile ? "min-w-[45rem]" : "min-w-[150rem]"
          }`}
          src={heroImage}
          alt="Apple Event"
        />
      </div>
      <div
        className={`w-full h-full flex items-center justify-center absolute top-0 left-0 ${
          isMobile ? "pt-12" : "pt-11"
        }`}
      >
        <div
          className={`outerContent absolute w-full bottom-0 left-0 flex items-center justify-center ${
            isMobile ? "h-1/2" : "h-3/5"
          }`}
        >
          <div
            className={`InnerContent w-full flex flex-col items-center justify-start ${
              isMobile ? "mt-16" : "mt-28"
            }`}
          >
            <h2
              className={`text-white flex ${
                isMobile ? "font-medium" : "font-bold"
              }`}
            >
              {[
                {
                  text: "It's",
                  textShadow:
                    "-4px -10px 22px rgba(0, 128, 217, .7), -4px -4px 22px rgba(0, 128, 217, .7), -4px 0px 22px rgba(0, 128, 217, .5), -4px 4px 22px rgba(0, 128, 219, .5), -4px 12px 22px rgba(0, 128, 217, .5), 40px -2px 22px rgba(0, 128, 217, .5), 40px 0px 22px rgba(0, 128, 217, .5), 40px 4px 22px rgba(0, 128, 217, .7)",
                },
                { text: "", gap: true },
                {
                  text: "Glo",
                  textShadow:
                    "2px -10px 22px rgba(0, 128, 217, .7), 2px -2px 22px rgba(0, 128, 217, .7), 2px 0px 22px rgba(112, 98, 217, .7), 2px 4px 22px rgba(112, 98, 217, .7), 2px 12px 22px rgba(112, 98, 217, .7), 20px 0px 22px rgba(191, 69, 172, .7), 20px 4px 22px rgba(191, 69, 172, .7)",
                },
                {
                  text: "wti",
                  textShadow:
                    "8px -10px 22px rgba(112, 98, 217, .7), 8px -2px 22px rgba(191, 69, 172, .5), 8px 0px 22px rgba(191, 69, 172, .5), 8px 4px 22px rgba(191, 69, 172, .5), 8px 12px 22px rgba(191, 69, 172, .5)",
                },
                {
                  text: "me.",
                  textShadow:
                    "13px -10px 20px rgba(206, 56, 118, .7), 13px -2px 22px rgba(206, 56, 118, .7), 13px 0px 22px rgba(206, 56, 118, .5), 13px 4px 22px rgba(206, 56, 118, .5), 13px 12px 22px rgba(206, 56, 118, .7)",
                },
              ].map(
                (
                  items: { text: string; gap?: boolean; textShadow?: string },
                  idx: number
                ) => {
                  return (
                    <span
                      className={`inline-block ${
                        isMobile
                          ? `${
                              items?.gap && "mr-2"
                            } leading-[1.125] text-[2rem]`
                          : `${
                              items?.gap && "mr-2"
                            } leading-[1.08349] text-[3rem]`
                      }`}
                      key={idx}
                      style={{ textShadow: items.textShadow }}
                    >
                      {items.text}
                    </span>
                  );
                }
              )}
            </h2>
            <div className="mt-2">
              <p
                className={`font-normal text-zinc-100 ${
                  isMobile
                    ? "text-[1.1rem] leading-[1.21]"
                    : "text-2xl leading-[1.16]"
                }`}
              >
                Watch tomorrow at 10 a.m. PT.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              {["Learn more"].map((items, idx) => {
                return (
                  <CTABtn
                    content={items}
                    animate={items == "Learn more" ? false : true}
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
