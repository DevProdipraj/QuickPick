import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Page404 } from "./pages/Page404";

import { Offers } from "./pages/Offers";
import NewProduct from "./pages/NewProduct";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-56 md:pt-44 bg-primary dark:bg-dark">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/newProduct" element={<NewProduct />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
