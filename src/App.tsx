import Locations from "./components/Locations";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Steps from "./components/Steps";
import Hero from "./components/Hero";

export default function App() {
  return (
    <section className="h-screen">
      <Header />
      <Navbar />
      <Hero />
      <Steps />
      <Locations />
      <Footer />
    </section>
  );
}
