type Links = { label: string; url: string }[];
const links: Links = [
  { label: "Store", url: "/store" },
  { label: "Mac", url: "/product/mac" },
  { label: "iPad", url: "/product/ipad" },
  { label: "iPhone", url: "/product/iphone" },
  { label: "Watch", url: "/product/watch" },
  { label: "Vision", url: "/product/apple-vision-pro" },
  { label: "AirPods", url: "/product/airpods" },
  { label: "TV & Home", url: "/product/home/:id" },
  { label: "Entertainment", url: "/entertainment" },
  { label: "Accessories", url: "/accessories" },
  { label: "Support", url: "/support" },
];

export default links;
