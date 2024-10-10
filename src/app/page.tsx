import Hero from "./components/hero";


export default function Home() {
  return (
      <main className="max-w-[1800px] mx-auto overflow-hidden">
        <h1 className="h1">Interno</h1>
        <Hero />

        <div className="h-[3000px]"></div>
      </main>
  );
}
