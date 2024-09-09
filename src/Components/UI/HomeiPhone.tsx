import { useContext, useEffect, useState } from "react";
import { WindowContext, WindowSize } from "../Contexts/windowContext";
import CTABtn from "./CTABtn";

const HomeiPhone = () => {
  const windowSize = useContext<WindowSize | null>(WindowContext);
  if (windowSize === null) throw new Error("The window size is null.");
  const isMobile = windowSize.width <= windowSize.mobileWidth;
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const loadImage = async (isMobile: boolean) => {
    try {
      if (isMobile) {
        const image = await import(
          "../../assets/Images/hero_iphone_small_2x.jpg"
        );
        setHeroImage(image.default);
      } else {
        const image = await import(
          "../../assets/Images/hero_iphone_largetall.jpg"
        );
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
          className={`object-center object-contain ${
            isMobile ? "min-w-[54rem]" : "min-w-[150rem]"
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
          className={`outerContent absolute w-full top-0 left-0 flex items-center justify-center ${
            isMobile ? "h-1/2" : "h-3/5"
          }`}
        >
          <div
            className={`InnerContent w-full flex flex-col items-center justify-start mt-12`}
          >
            <h2
              className={`text-white flex ${
                isMobile ? "font-medium" : "font-bold"
              }`}
            >
              <span
                className={`inline-block ${
                  isMobile
                    ? `leading-[1.125] text-[2rem]`
                    : `leading-[1.08349] text-[3rem]`
                }`}
              >
                iPhone
              </span>
            </h2>
            <div className="mt-2">
              <p
                className={`font-normal text-zinc-100 flex flex-col items-center justify-center ${
                  isMobile
                    ? "text-[1.1rem] leading-[1.21]"
                    : "text-2xl leading-[1.16]"
                }`}
              >
                {[
                  "Our most powerful cameras yet.",
                  "Ultrafast chips. And USB-C.",
                ].map((item, idx) => (
                  <span key={idx} className="inline-block">
                    {item}
                  </span>
                ))}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              {["Learn more", "Shop iPhone"].map((items, idx) => {
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

export default HomeiPhone;
