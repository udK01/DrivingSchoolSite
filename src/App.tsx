import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Steps from "./components/Steps";

export default function App() {
  return (
    <section className="h-screen">
      <Header />
      <Navbar />
      <Hero />
      <Steps />
    </section>
  );
}
