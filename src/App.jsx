import Header from "./components/Header";
import Hero from "./components/Hero";
import Regions from "./components/Regions";
import Lodging from "./components/Lodging";
import Resorts from "./components/Resorts";
import Passes from "./components/Passes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-slate-800 relative">
      <Header />
      <Hero />
      <Regions />
      <Lodging />
      <Resorts />
      <Passes />
      <Footer />
    </div>
  );
}

export default App;
