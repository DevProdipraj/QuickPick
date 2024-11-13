import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// all product image
import ProductOne from "../assets/TopProducts/Product1.jpg";
import ProductTwo from "../assets/TopProducts/Proeduct2.jpg";
import ProductThree from "../assets/TopProducts/Proeduct3.jpg";
import ProductFour from "../assets/TopProducts/Product4.jpg";
import ProductFive from "../assets/TopProducts/Product5.jpg";
import ProductSix from "../assets/TopProducts/Product6.jpg";
import ProductSeven from "../assets/TopProducts/Product7.jpg";
import ProductEight from "../assets/TopProducts/Product8.jpg";
import ProductNine from "../assets/TopProducts/Product9.webp";
import ProductTen from "../assets/TopProducts/Product10.webp";

function TopProductsSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductOne}
            alt=""
          />
        </div>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductTwo}
            alt=""
          />
        </div>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductThree}
            alt=""
          />
        </div>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductFour}
            alt=""
          />
        </div>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductFive}
            alt=""
          />
        </div>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductSix}
            alt=""
          />
        </div>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductSeven}
            alt=""
          />
        </div>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductEight}
            alt=""
          />
        </div>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductNine}
            alt=""
          />
        </div>
        <div className="focus:outline-none cursor-pointer ">
          <img
            className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]"
            src={ProductTen}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default TopProductsSlider;
