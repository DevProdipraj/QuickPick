import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import { removeFromCart } from "../../freture/Product/ProductSlice";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Products);

  // Initialize state for quantities of each product
  const [quantities, setQuantities] = useState(
    cart.products ? cart.products.map(() => 1) : []
  );

  // Calculate subtotal based on quantities and product prices
  const subtotal = cart.products
    ? cart.products.reduce(
        (total, product, index) => total + product.price * quantities[index],
        0
      )
    : 0;

  // Calculate total quantity dynamically
  const totalQuantity = quantities.reduce((acc, qty) => acc + qty, 0);

  // Handle quantity change
  const handleQuantityChange = (index, newQuantity) => {
    if (!isNaN(newQuantity) && newQuantity > 0) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] = newQuantity;
      setQuantities(updatedQuantities);
    }
  };

  // Handle product deletion
  const handleDeleteProduct = (index, productId) => {
    // Remove product from Redux store
    dispatch(removeFromCart(productId));

    // Update local quantities state to remove the deleted product's quantity
    const updatedQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(updatedQuantities);
  };

  // Function to truncate product names
  const truncateName = (title, wordLimit) => {
    return title.split(" ").slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="sm:container py-5">
      <div className="shadow-md bg-[#ffffffa1] md:py-8 md:px-10 rounded-md">
        <h1 className="text-2xl text-primary font-bold  pb-4 ">
          Shopping Cart
        </h1>
        <div className="bg-[#ffffff63] rounded-md shadow-sm shadow-[#ffffff94] pb-10 px-2 sm:px-10 ">
          <div className="overflow-x-scroll sm:overflow-hidden">
            <div className="flex items-center justify-around py-5 sm:mt-5 rounded-t-md space-x-1">
              <div className="w-5/12 text-center">
                <span className="text-primary font-heading1 whitespace-wrap ">
                  Product Image
                </span>
              </div>
              <div className="w-5/12 text-center">
                <span className="text-primary font-heading1 whitespace-nowrap ">
                  Name
                </span>
              </div>
              <div className="w-5/12 text-center">
                <span className="text-primary font-heading1 whitespace-nowrap ">
                  Quantity
                </span>
              </div>
              <div className="w-5/12 text-center">
                <span className="text-primary font-heading1 whitespace-nowrap ">
                  Unit Price
                </span>
              </div>
              <div className="w-5/12 text-center">
                <span className="text-primary font-heading1 whitespace-wrap ">
                  Total Price
                </span>
              </div>
            </div>
            <hr />
            <div className="py-5">
              {cart.products && cart.products.length > 0 ? (
                cart.products.map((product, index) => (
                  <div key={product.id} className="flex items-center  py-2">
                    <div className="w-5/12  text-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 mx-auto"
                      />
                    </div>
                    <div className="w-5/12 text-center">
                      <span className="text-primary text-md">
                        {truncateName(product.name, 3)}
                      </span>
                    </div>
                    <div className="w-5/12 text-center flex items-center justify-center">
                      <div className="flex items-center justify-center bg-primary rounded-md">
                        <input
                          className="text-4xl mx-2 cursor-pointer hover:transform hover:scale-125 transition duration-500 text-text"
                          type="button"
                          value="-"
                          onClick={() =>
                            handleQuantityChange(
                              index,
                              Math.max(1, quantities[index] - 1)
                            )
                          }
                        />
                        <input
                          className="bg-primary text-center w-1/2 text-text outline-none"
                          type="number"
                          value={quantities[index]}
                          onChange={(event) =>
                            handleQuantityChange(
                              index,
                              parseInt(event.target.value) || 1
                            )
                          }
                        />
                        <input
                          className="text-2xl mx-2 cursor-pointer hover:transform hover:scale-125 transition duration-500 text-text"
                          type="button"
                          value="+"
                          onClick={() =>
                            handleQuantityChange(index, quantities[index] + 1)
                          }
                        />
                      </div>
                      <RiDeleteBin5Line
                        onClick={() => handleDeleteProduct(index, product.id)}
                        className="ms-3 size-7 cursor-pointer hover:transform hover:scale-110 transition-all duration-500 text-border"
                      />
                    </div>
                    <div className="w-5/12 text-center">
                      <span className="text-primary text-md">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="w-5/12 text-center">
                      <span className="text-primary text-md">
                        ${(product.price * quantities[index]).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center flex-col my-10">
                  <p className="text-primary font-paragraph text-2xl">
                    Empty Cart!
                  </p>
                  <div className="flex items-center justify-center py-3 px-3 rounded-md text-xl border-primary cursor-pointer bg-primary hover:bg-opacity-70 text-text transition-colors duration-700 mt-3">
                    <FaShoppingCart />
                    <input
                      className="ms-2"
                      type="button"
                      value="Shopping Now"
                      onClick={() => navigate("/shop")}
                    />
                  </div>
                </div>
              )}
            </div>
            <hr />
          </div>
          <div className="py-5">
            <h1 className="text-xl sm:text-2xl text-primary font-heading2 font-bold">
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
            <div className="flex items-center justify-end ">
              <div className="bg-[#ffffffa9] w-full sm:w-1/2 md:w-1/5 shadow-md py-5 px-5 rounded-md my-6">
                <h1 className="text-center text-primary font-heading1 font-bold mb-4">
                  Order Summary
                </h1>
                <div className="flex items-center justify-between mb-1">
                  <h1 className="me-5 text-primary">Total Item</h1>
                  <span className="text-primary">{totalQuantity}</span>
                </div>
                <hr />
                <div className="flex items-center mt-3 ">
                  <h1 className="text-primary font-heading1 font-semibold">
                    Sub Total:
                  </h1>
                  <span className="ms-4 text-primary text-md font-heading2 font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 sm:mt-8">
              <input
                className="py-2 px-2 rounded-md text-sm border border-primary cursor-pointer bg-primary hover:bg-opacity-70 text-text transition-colors duration-700"
                type="button"
                value="Continue Shopping"
                onClick={() => navigate(-1)}
              />
              <Link to="/login">
                <input
                  className="py-2 px-2 rounded-md text-sm border border-primary cursor-pointer bg-primary hover:bg-opacity-70 text-text transition-colors duration-700"
                  type="button"
                  value="Confirm Order"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
