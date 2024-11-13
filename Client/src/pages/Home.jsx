import Cetegories from "../components/Cetegories";
import HeroSlider from "../components/HeroSlider";
import { OurServices } from "../components/OurServices";
import AllProducts from "../components/AllProducts";
import { TopProducts } from "../components/TopProducts";

const Home = () => {
  return (
    <div className="bg-primary dark:bg-dark py-3    ">
      <HeroSlider />
      <OurServices />
      <Cetegories />
      <TopProducts />
      <AllProducts />
    </div>
  );
};

export default Home;
