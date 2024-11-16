import { FaPhone, FaUser, FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import BrandImg from "../assets/logos/BrandIcons.png";
import { Link } from "react-router-dom";
import DarkMode from "../shared/DarkMode";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= scrollPosition || currentScrollY <= 50);
      setScrollPosition(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  // Select total quantity of items in cart
  const cartQuantity = useSelector((state) => state.Products.products);

  return (
    <nav
      className={`fixed top-0 text-white transition-transform duration-500 ease-in-out shadow-md  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${scrollPosition > 50 ? "bg-red-500" : "bg-blue-500"} z-50 w-full`}
    >
      <div className="bg-primary dark:bg-dark text-text">
        {/* Top Navbar */}
        <div className="container flex items-center   justify-between py-2 md:py-3">
          <div className="hidden md:flex items-center">
            <FaPhone />
            <h3 className="text-sm font-textItalic ms-2 hover:underline">
              +880 01746-441019
            </h3>
          </div>
          <p className="hidden md:block font-paragraph">
            Welcome to our market
          </p>
          <Link className="sm:hidden  first-letter:" to="/">
            <img src={BrandImg} alt="Logo" className="   max-w-36 me-2" />
          </Link>
          <div className="flex items-center">
            <DarkMode />
            <select className="bg-primary cursor-pointer dark:bg-dark border-0 focus:ring-0">
              <option value="en">English</option>
              <option value="bn">Bangla</option>
            </select>
            <Link className="mx-2 flex items-center" to="#">
              <FaUser /> Login
            </Link>
          </div>
        </div>
        <hr />

        {/* Main Navbar */}
        <div className="py-5 container flex justify-between">
          <Link to="/">
            <img
              src={BrandImg}
              alt="Logo"
              className="hidden sm:block max-w-48 me-2"
            />
          </Link>
          <div className="flex-1 relative">
            <form>
              <input
                className="w-full mx-auto py-1 md:py-2 px-2 md:px-4 rounded-sm border-gray-500 focus:ring-0 text-primary md:ms-4"
                type="text"
                placeholder="Search Here"
              />
              <IoSearch className="absolute right-2 md:right-3 top-2 md:top-3 text-primary cursor-pointer" />
            </form>
          </div>
          <div className="flex items-center gap-4 ms-4 lg:ms-10">
            <div className="flex items-start">
              <Link to="/shoppingCart">
                <FaShoppingCart className="size-6 cursor-pointer hover:scale-125 transition-all duration-300" />
              </Link>
              <span className="ms-[3px] text-md">
                {cartQuantity.length > 0 ? cartQuantity.length : 0}
              </span>
            </div>
            <CiHeart className="size-6 cursor-pointer hover:scale-125 transition-all duration-300" />
          </div>
        </div>

        {/* Bottom Navbar Links */}
        <div className="flex justify-center pb-5">
          <nav>
            <Link
              to="/"
              className="mx-3 text-[16px] font-paragraph hover:underline"
            >
              Home
            </Link>
            <Link
              to="/newProduct"
              className="mx-3 text-[16px] font-paragraph hover:underline"
            >
              New Products
            </Link>
            <Link
              to="/offers"
              className="mx-3 text-[16px] font-paragraph hover:underline"
            >
              Offers
            </Link>
            <Link
              to="/shop"
              className="mx-3 text-[16px] font-paragraph hover:underline"
            >
              Shop
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
