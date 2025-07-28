import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Wishlist from "./components/Wishlist";
import Singlepro from "./components/Singlepro";
import Home from "./components/Home";
import Profilepage from "./components/Profilepage";
import Allproduct from "./components/Allproduct";
// import Diamond from "./components/Diamond";
import Customize from "./components/Customize";
import Producttab from "./components/Producttab";

// ✅ Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      {/* Auto-scroll to top on every route change */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Singlepro" element={<Singlepro />} />
        <Route path="/Profilepage" element={<Profilepage />} />
        <Route path="/Allproduct" element={<Allproduct />} />
        {/* <Route path="/Diamond" element={<Diamond />} /> */}
        <Route path="/Customize" element={<Customize />} />
        <Route path="/Producttab" element={<Producttab />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
