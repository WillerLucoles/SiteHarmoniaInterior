import Header from "./Components/header";
import Hero from "./Components/hero";
import Steps from "./Components/steps";



export default function Home() {
  return (
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <div className="bg-hero bg-cover">
          <Steps /> 
          <div className="h-[3000px]"></div>         
        </div>


        
      </main>
  );
}
