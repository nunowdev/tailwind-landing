import "./App.css";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-Poppins overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
