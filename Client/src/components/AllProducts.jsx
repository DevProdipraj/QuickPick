import Products from "./Products";

const AllProducts = () => {
  return (
    <div className="container md:px-16">
      <h1 className="text-text font-heading2 text-2xl mb-10 underline underline-offset-8">
        Products
      </h1>
      <Products />
    </div>
  );
};

export default AllProducts;
