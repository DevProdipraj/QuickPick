import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImg1 from "../assets/HeroSliderImg/Img2.webp";
import SliderImg2 from "../assets/HeroSliderImg/Img1.webp";
import SliderImg3 from "../assets/HeroSliderImg/Img3.webp";
import SliderImg4 from "../assets/HeroSliderImg/Img4.webp";

function HeroSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" container mt-5 ">
      <Slider {...settings}>
        <div>
          <img
            className=" h-[30vh] md:h-[70vh]   w-full"
            src={SliderImg2}
            alt=""
          />
        </div>
        <div>
          <img
            className=" h-[30vh] md:h-[70vh]   w-full border-0  outline-0"
            src={SliderImg1}
            alt=""
          />
        </div>
        <div>
          <img
            className=" h-[30vh] md:h-[70vh]  w-full border-0  outline-0"
            src={SliderImg3}
            alt=""
          />
        </div>
        <div>
          <img
            className=" h-[30vh] md:h-[70vh]   w-full border-0  outline-0"
            src={SliderImg4}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroSlider;
