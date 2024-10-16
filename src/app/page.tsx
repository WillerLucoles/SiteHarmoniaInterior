import About from "./Components/about";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Steps from "./Components/steps";
import TestimonialsSection from "./Components/Testimonials/testimonials";



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
        <div className="h-[1000px]"></div>         
        </div>


        
      </main>
  );
}
