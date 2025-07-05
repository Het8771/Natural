
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Diamond from "./components/Diamond";
import Customize from "./components/Customize";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Wishlist" element={<Wishlist/>} />
          <Route path="/Singlepro" element={<Singlepro/>} />
          <Route path="/Profilepage" element={<Profilepage/>} />
          <Route path="/Allproduct" element={<Allproduct/>} />
          <Route path="/Diamond" element={<Diamond/>} />
          <Route path="/Customize" element={<Customize/>} />






        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
