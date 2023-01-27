import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Donate from './pages/Donate';
import Events from './pages/Events';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleEvent from './components/SingleEvent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="events/:id" element={<SingleEvent />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
