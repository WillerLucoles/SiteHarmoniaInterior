export default function Home() {
    return (
      <div>
        {/* Hero Section */}
        <section className="hero">
          <h1>Transforme Seu Espaço com Estilo</h1>
          <p>Projetos personalizados que refletem sua personalidade.</p>
          <button>Solicite uma Estimativa Grátis</button>
        </section>
  
        {/* Sobre Nós */}
        <section className="about">
          <h2>Sobre Nós</h2>
          <p>A Harmonia Interior é dedicada a criar ambientes únicos que unem conforto e estilo.</p>
        </section>
  
        {/* Nossos Serviços */}
        <section className="services">
          <h2>Nossos Serviços</h2>
          <div className="service-item">Design de Interiores</div>
          <div className="service-item">Consultoria</div>
          <div className="service-item">Reformas</div>
        </section>
  
        {/* Galeria de Projetos */}
        <section className="gallery">
          <h2>Nossos Projetos</h2>
          {/* Coloque suas imagens de projetos aqui */}
        </section>
  
        {/* Depoimentos */}
        <section className="testimonials">
          <h2>O que Nossos Clientes Dizem</h2>
          <p>"A equipe da Harmonia Interior transformou meu espaço de forma incrível!" - Cliente Satisfeito</p>
        </section>
  
        {/* Rodapé */}
        <footer>
          <p>Harmonia Interior - Todos os direitos reservados</p>
          <p>Contato: contato@harmoniainterior.com.br</p>
        </footer>
      </div>
    );
  }
  