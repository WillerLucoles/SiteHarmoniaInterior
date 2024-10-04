// src/app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header Section */}
      <header className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Transforme Seu Espaço com Estilo</h1>
        <p className="text-lg">Projetos personalizados que refletem sua personalidade.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Solicite uma Estimativa Grátis</button>
      </header>

      {/* Main Section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="about">
          <h2>Sobre Nós</h2>
          <p>A Harmonia Interior é dedicada a criar ambientes únicos que unem conforto e estilo.</p>
        </section>

        <section className="services">
          <h2>Nossos Serviços</h2>
          <div className="service-item">Design de Interiores</div>
          <div className="service-item">Consultoria</div>
          <div className="service-item">Reformas</div>
        </section>

        <section className="gallery">
          <h2>Nossos Projetos</h2>
          {/* Coloque suas imagens de projetos aqui */}
        </section>

        <section className="testimonials">
          <h2>O que Nossos Clientes Dizem</h2>
          <p>"A equipe da Harmonia Interior transformou meu espaço de forma incrível!" - Cliente Satisfeito</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Harmonia Interior - Todos os direitos reservados</p>
        <p>Contato: contato@harmoniainterior.com.br</p>
      </footer>
    </div>
  );
}
