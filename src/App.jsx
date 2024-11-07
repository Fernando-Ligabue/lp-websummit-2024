import About from "./components/About";
import BannerSection from "./components/BannerSection";
import CalendarComponent from "./components/CalendarComponent";
import EconomicSection from "./components/EconomicSection";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <VideoSection />
      <Ecosystem />
      <CalendarComponent />
      <EconomicSection />
      <BannerSection />
      <Footer />
    </>
  );
}

export default App;
