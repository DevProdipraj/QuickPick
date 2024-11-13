import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { addToCard } from "../../freture/Product/ProductSlice";
import { useDispatch } from "react-redux";

export const ProductCard = ({ product }) => {
  const truncateDescription = (description, wordLimit) => {
    return description.split(" ").slice(0, wordLimit).join(" ") + "...";
  };
  const truncateTitle = (title, wordLimit) => {
    return title.split(" ").slice(0, wordLimit).join(" ") + "...";
  };
  const dispatch = useDispatch();

  const handleAddToCard = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCard(product));
    alert("Product Added Successfully");
  };

  return (
    <div className="bg-dark dark:bg-text rounded-lg overflow-hidden cursor-pointer pb-2 shadow-md shadow-[#7a787891] hover:shadow-md hover:shadow-[#f8f8f8b4] transition-all duration-300">
      <img className="h-60 w-full" src={product.image} alt="" />
      <h2 className="text-text dark:text-primary font-paragraph text-[18px] py-2 ps-3">
        {truncateTitle(product.title, 8)}
      </h2>
      <div className="flex items-center justify-around mb-2">
        <h1 className="text-secondary font-heading2 ps-3 text-xl">
          ${product.price}
        </h1>
        <div className="flex items-center justify-center">
          <FaStar className="size-6 text-secondary" />
          <FaStar className="size-6 text-secondary" />
          <FaStar className="size-6 text-secondary" />
          <FaStar className="size-6 text-secondary" />
          <FaStar className="size-6 text-[#b8b3b3]" />
        </div>
      </div>
      <div className="flex items-center justify-around mb-3">
        <button className="text-text dark:text-primary font-paragraph text-md mt-1 ms-3 rounded-md bg-secondary py-1 px-2">
          {product.category}
        </button>
        <button
          onClick={(e) => handleAddToCard(e, product)}
          className="text-text dark:text-primary font-paragraph text-md mt-1 ms-3 rounded-md bg-secondary py-1 px-2"
        >
          <MdAddShoppingCart className="inline-block size-5 me-1" />
          Add to Card
        </button>
      </div>
      <p className="text-text dark:text-primary px-3 py-2 text-sm">
        {truncateDescription(product.description, 15)}
      </p>
    </div>
  );
};
