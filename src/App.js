import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact" ;
import Donate from "./pages/Donate" ;
import Gallery from "./pages/Gallery" ;
import Home from "./pages/Home" ;
import Membership from "./pages/Membership" ;
import Navbar from "./components/Navbar";
import Footer from "./components/Footer" ;

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/donate' element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
