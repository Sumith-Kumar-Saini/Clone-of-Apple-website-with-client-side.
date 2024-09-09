import CTABtn from "./CTABtn";
import { ProductData } from "../Products";
import { useContext } from "react";
import { WindowContext, WindowSize } from "../Contexts/windowContext";

const Product = ({ productData }: { productData: ProductData }) => {
  const windowSize = useContext<WindowSize | null>(WindowContext);
  if (windowSize === null) throw new Error("The window size is null.");

  const isMobile = windowSize.width <= windowSize.mobileWidth;

  return (
    <div className={`relative ${isMobile ? "h-[28rem]" : "h-[32rem]"}`}>
      <div 
      style={{backgroundColor: productData.bgColor}}
      className="image overflow-hidden h-full flex items-center justify-center w-full">
        <img
          className={`${isMobile ? "" : ""} h-full object-cover object-center`}
          src={`${productData.image !== null && productData.image}`}
          alt={productData.title}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start">
        <h3 style={{color: productData.color}} className={`${isMobile ? "text-2xl font-semibold mt-4" : "text-2xl font-bold"} text-wrap text-center`}>{productData.title}</h3>
        <p style={{color: productData.color}} className={`${isMobile ? "text-lg" : "text-xl"} text-wrap text-center`}>{productData.desc}</p>
        <div className="flex items-center gap-2 mt-4">
          {productData.ctas.map((cta, idx) => (
            cta == "Learn more" ? <CTABtn key={idx} content={cta} /> : <CTABtn key={idx} content={cta} animate={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
