import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Locations from "./components/Locations";

import Pricing from "./components/Pricing";
import Instructor from "./components/Instructor";

import Footer from "./components/Footer";

const Home = () => (
  <>
    <Hero />
    <Steps />
    <Locations />
  </>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<div>About Us Page</div>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/become-an-instructor" element={<Instructor />} />
        <Route path="/testimonials" element={<div>Testimonials Page</div>} />
        <Route path="/contact-us" element={<div>Contact Us Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}
