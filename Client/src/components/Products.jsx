import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../freture/Product/ProductSlice";
import { useEffect } from "react";
import { ProductCard } from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
      {productsData.data &&
        productsData.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Products;
