import "./App.css";
import Download from "./components/Download";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App font-Poppins overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Download />
    </div>
  );
}

export default App;
