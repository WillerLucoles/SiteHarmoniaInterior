import Header from "./Components/header";
import Hero from "./Components/hero";


export default function Home() {
  return (
      <main className="overflow-hidden">
        <Header />
        <Hero />

        <div className="h-[3000px]"></div>
      </main>
  );
}
