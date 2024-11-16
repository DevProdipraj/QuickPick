import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../assets/HeroSliderImg/Img2.webp";
import Img2 from "../assets/HeroSliderImg/Img1.webp";
import Img3 from "../assets/HeroSliderImg/img3.webp";
import Img4 from "../assets/HeroSliderImg/Img2.webp";

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
            src={Img2}
            alt=""
          />
        </div>
        <div>
          <img
            className=" h-[30vh] md:h-[70vh]   w-full border-0  outline-0"
            src={Img1}
            alt=""
          />
        </div>
        <div>
          <img
            className=" h-[30vh] md:h-[70vh]  w-full border-0  outline-0"
            src={Img3}
            alt=""
          />
        </div>
        <div>
          <img
            className=" h-[30vh] md:h-[70vh]   w-full border-0  outline-0"
            src={Img4}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroSlider;
