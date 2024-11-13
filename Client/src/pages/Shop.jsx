import Products from "../components/Products";
import { TopProducts } from "../components/TopProducts";

const Shop = () => {
  return (
    <div className=" bg-primary  ">
      <div className="container">
        <TopProducts />
        <Products />
      </div>
    </div>
  );
};

export default Shop;
