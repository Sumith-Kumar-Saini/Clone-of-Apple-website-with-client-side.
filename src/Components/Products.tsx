import { useContext, useEffect, useState } from "react";
import { WindowContext, WindowSize } from "./Contexts/windowContext";
import Product from "./UI/Product";

// Define the Data type
export type ProductData = {
  title: string;
  desc: string;
  ctas: string[];
  garyText?: string;
  redText?: string;
  bgColor: string;
  color: string;
  image?: string | null;
};
// Your sample product data
const data: ProductData[] = [
  {
    title: "MacBook Air",
    desc: "Lean. Mean. M3 machine.",
    ctas: ["Learn more", "Buy"],
    bgColor: "#f5f5f7",
    color: "#000000",
  },
  {
    title: "iPad Pro",
    desc: "Unbelievably thin. incredibly powerful.",
    ctas: ["Learn more", "Buy"],
    bgColor: "#000000",
    color: "#ffffff",
  },
  {
    title: "Apple Intelligence",
    desc: "AI for the rest of us.",
    garyText: "Coming in beta this fall¹",
    ctas: ["Learn more", "Watch the film"],
    bgColor: "#f5f5f7",
    color: "#000000",
  },
  {
    title: "Apple Watch",
    desc: "Smarter. Brighter. Mightier.",
    redText: "SERIES 9",
    ctas: ["Learn more", "Buy"],
    bgColor: "#000000",
    color: "#ffffff",
  },
];

const Products = () => {
  const windowSize = useContext<WindowSize | null>(WindowContext);
  if (windowSize === null) throw new Error("The window size is null.");

  const isMobile = windowSize.width <= windowSize.mobileWidth;

  const [products, setProducts] = useState<ProductData[]>([]);

  const loadImages = async (isMobile: boolean) => {
    try {
      const updatedData = await Promise.all(
        data.map(async (product) => {
          let imagePath: string | null = null;

          // Dynamically import the correct image based on device type
          if (isMobile) {
            imagePath = (
              await import(
                `../assets/Images/${product.title.replace(
                  /\s+/g,
                  ""
                )}_small.jpg`
              )
            ).default;
          } else {
            imagePath = (
              await import(
                `../assets/Images/${product.title.replace(
                  /\s+/g,
                  ""
                )}_large.jpg`
              )
            ).default;
          }

          return { ...product, image: imagePath };
        })
      );
      
      setProducts(updatedData);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  useEffect(() => {
    loadImages(isMobile);
  }, [isMobile]);

  return (
    <div className={`w-full grid ${isMobile ? "grid-cols-1 p-0 gap-2" : "grid-cols-2 p-2 gap-2" }`}>
      {products.map((product, index) => (
        <div key={index} className="grid-item">
          <Product productData={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
