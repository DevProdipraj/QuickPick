import { Link } from "react-router-dom";
import BrandImg from "../assets/logos/BrandIcons.png";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-primary dark:bg-dark text-text py-3 md:py-5">
      <footer className=" container">
        {/* footer top  */}
        <div className="flex flex-col md:flex-row  justify-between">
          <div className="w-full md:w-[50%]">
            <Link to="/">
              <img className="max-w-48" src={BrandImg} alt="" />
            </Link>
            <p className="w-[70%] text-sm py-2 font-paragraph hover:underline">
              Your One-stop Shop For All Your needs. Shop With us And experience
              the best online shopping experience.{" "}
            </p>
          </div>
          <div className="w-full md:w-[20%] mt-3 md:mt-0">
            <h2 className="text-lg font-heading2">Quick Links</h2>
            <ul className="flex flex-col py-2">
              <Link
                className="text-sm font-paragraph hover:underline mb-1"
                to=""
              >
                Home
              </Link>
              <Link
                className="text-sm font-paragraph hover:underline mb-1"
                to=""
              >
                Shop
              </Link>
              <Link
                className="text-sm font-paragraph hover:underline mb-1"
                to=""
              >
                About Us
              </Link>
              <Link
                className="text-sm font-paragraph hover:underline mb-1"
                to=""
              >
                Contact Us
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-[30%] mt-3 md:mt-0">
            <h2 className="text-lg font-heading2">Follow us</h2>
            <div className="flex items-center justify-start gap-4 py-2">
              <Link to="/">
                <FaFacebook className="size-5 hover:scale-110 transition-all duration-300" />
              </Link>
              <Link to="/">
                <FaYoutube className="size-6 hover:scale-110 transition-all duration-300" />
              </Link>
              <Link to="/">
                <FaInstagram className="size-6 hover:scale-110 transition-all duration-300" />
              </Link>
              <Link to="/">
                <FaLinkedin className="size-5 hover:scale-110 transition-all duration-300" />
              </Link>
            </div>
            <div className="mt-3 flex items-center  ">
              <input
                className="bg-transparent   text-primary    focus:outline-0 text-sm rounded-s-md py-[9px] px-3"
                type="text"
                name=""
                id=""
              />
              <input
                className="bg-secondary hover:bg-opacity-70  transition-all duration-500 cursor-pointer rounded-e-md px-1 py-[9px]  text-text text-sm"
                type="submit"
                value="Subscribe"
              />
            </div>
          </div>
        </div>
        {/* footer bottom  */}
        <hr className="my-3 md:my-4" />
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <p>&copy; All Right Reserved To QuickPick 2024</p>
          <ul>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms Of Services</Link>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
