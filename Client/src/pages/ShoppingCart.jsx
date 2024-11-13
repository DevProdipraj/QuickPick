import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.Products);
  const truncateName = (title, wordLimit) => {
    return title.split(" ").slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="container py-5">
      <div className="shadow-md bg-[#ffffffa1] md:py-8 md:px-10 rounded-md">
        <h1 className="text-2xl text-primary font-bold">Shopping Cart</h1>
        <div className="bg-[#ffffff63] rounded-md shadow-sm shadow-[#ffffff94] pb-10 px-10">
          <div className="flex items-center justify-around py-5 mt-5 rounded-t-md">
            <span className="text-primary font-heading1">Product Image</span>

            <span className="text-primary font-heading1">Name</span>
            <span className="text-primary font-heading1">Quantity</span>
            <span className="text-primary font-heading1">Unit Price</span>
            <span className="text-primary font-heading1">Total Price</span>
          </div>
          <hr />
          <div className="py-5">
            {cart.products && cart.products.length > 0 ? (
              cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-around py-2"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16"
                  />
                  <span>{truncateName(product.name, 5)}</span>

                  <span>{product.Quantity}</span>
                  <span>${product.price.toFixed(2)}</span>
                  <span>${(product.price * product.Quantity).toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p className="text-primary font-paragraph">
                No products in the cart.
              </p>
            )}
          </div>
          <hr />
          <div className="py-5">
            <h1 className="text-2xl text-primary font-heading2 font-bold">
              What would you like to do next?
            </h1>
            <p className="text-primary text-sm font-paragraph">
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
            <div className="mt-5">
              <div>
                <input
                  className="py-2 uppercase px-2 w-1/3 rounded-md outline-none border border-primary text-sm"
                  placeholder="Promo / Coupon Code"
                  type="text"
                />
                <input
                  className="text-primary py-2 px-2 rounded-md ms-3 text-sm border border-primary cursor-pointer hover:bg-primary hover:text-text transition-colors duration-700"
                  type="button"
                  value="Apply Coupon"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <input
                className="py-2 px-2 rounded-md text-sm border border-primary cursor-pointer bg-primary hover:bg-opacity-70 text-text transition-colors duration-700"
                type="button"
                value="Continue Shopping"
                onClick={() => navigate(-1)}
              />
              <input
                className="py-2 px-2 rounded-md text-sm border border-primary cursor-pointer bg-primary hover:bg-opacity-70 text-text transition-colors duration-700"
                type="button"
                value="Confirm Order"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
