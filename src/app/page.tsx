
import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";
import Steps from "./components/steps";
import TestimonialsSection from "./components/testimonials";
import Works from "./components/works";
import Status from "./components/status.";
import News from "./components/news";
import ContactUS from "./components/contactUs";
import Footer from "./components/footer";



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
          <ContactUS />
          <Footer />
        </div>


        
      </main>
  );
}
