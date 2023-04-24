import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import About from './pages/About';
import Donate from './pages/Donate';
import Events from './pages/Events';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import SingleEvent from './pages/SingleEvent';
import Activities from './pages/Activities';
import News from './pages/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PaymentSuccess from './pages/success';
import PaymentUnSuccess from './pages/cancel';

//update routes
function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/news" element={<News />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/events" element={<Events />} />
          <Route path="events/:id" element={<SingleEvent />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/success" element={<PaymentSuccess />}></Route>
          <Route path="/cancel" element={<PaymentUnSuccess />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
