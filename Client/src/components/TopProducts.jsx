import TopProductsSlider from "./TopProductsSlider";

export const TopProducts = () => {
  return (
    <div className="container  md:py-10   md:px-16">
      <h1 className="text-text font-heading2 text-2xl mb-10 underline underline-offset-8">
        Top Products
      </h1>
      <TopProductsSlider />
    </div>
  );
};
