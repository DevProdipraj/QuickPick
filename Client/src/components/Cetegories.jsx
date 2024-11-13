import Apperel from "../assets/CetegoriesImg/Apperel.avif";
import Beauty from "../assets/CetegoriesImg/Beauty.avif";
import Commercial from "../assets/CetegoriesImg/Commercial.avif";
import Consumer from "../assets/CetegoriesImg/Consumer.avif";
import Envirenment from "../assets/CetegoriesImg/Envirenment.avif";
import Home from "../assets/CetegoriesImg/Home.avif";
import Industry from "../assets/CetegoriesImg/Industry.png";
import Jeweiry from "../assets/CetegoriesImg/Jeweiry.avif";
import KIds from "../assets/CetegoriesImg/KIds.avif";
import Measurement from "../assets/CetegoriesImg/Measurement.avif";
import Printing from "../assets/CetegoriesImg/Printing.avif";
import Shoes from "../assets/CetegoriesImg/Shoes.avif";
import Sports from "../assets/CetegoriesImg/Sports.avif";
import Vehicle from "../assets/CetegoriesImg/Vehicle.avif";

const Cetegories = () => {
  return (
    <div className="container py-9 md:py-20 px-5  md:px-16">
      <h1 className="text-text font-heading2 text-2xl mb-10 underline underline-offset-8">
        Our Cetegories
      </h1>
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8">
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Apperel}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Apparel & Accessories
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Beauty}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Beauty
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Commercial}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Commercial Equipment
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Consumer}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Consumer <br />
              Electronics
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Envirenment}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Sports & Entertainment
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Home}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Home & Garden
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Industry}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Industrial <br />
              Machinery
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Jeweiry}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Jewelry, Eyewear
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={KIds}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Kids & Toys
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Measurement}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Measurement
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Printing}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Packaging & <br />
              Printing
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Shoes}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Shoes & <br />
              Accessories
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Sports}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Sports & Entertainment
            </h3>
          </div>
        </div>
        {/* Cetegories box */}
        <div className="w-[160px]  h-[160px] border-2 border-[#eaeaea] rounded-[80px] cursor-pointer hover:border-secondary transition-colors duration-300 overflow-hidden flex items-center justify-center">
          <div className="w-full text-center">
            <img
              className=" h-[70px]  w-[70px] text-text  m-auto mix-blend-multiply "
              src={Vehicle}
              alt=""
            />
            <h3
              className="text-text font-paragraph
            "
            >
              Vehicle Parts & Accessories
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cetegories;
