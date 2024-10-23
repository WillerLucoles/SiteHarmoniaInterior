import About from "./Components/about";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Steps from "./Components/steps";
import Brands from "./Components/brands";
import TestimonialsSection from "./Components/testimonials";
import Works from "./Components/works";
import Status from "./Components/status.";
import News from "./Components/news";



export default function Home() {
  return (
      <main className="overflow-hidden">
        <Header />
        <div className="bg-hero bg-cover">
        <Hero />
        </div>
        <div className="bg-hero bg-cover">
          <Steps />
          <About />
          <TestimonialsSection />
          <Works />
          <Status />
          <News />
          <Brands />
        <div className="h-[1000px]"></div>
        </div>


        
      </main>
  );
}
