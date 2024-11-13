import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../freture/Product/NewProductSlice";
import { useEffect } from "react";
import { NewProductCard } from "../components/NewProductCard";

const NewProduct = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading,
    isError,
  } = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="bg-primary dark:bg-dark">
      <div className="container py-5">
        {isLoading && <p>Loading products...</p>}
        {isError && <p>Error loading products.</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
          {products &&
            products.map((product) => (
              <NewProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;