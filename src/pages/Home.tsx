import React from 'react';

function Home() {
  return (
    <section className="grid grid-cols-2">
      <div>
        <div className="flex gap-4 mb-6 text-2xl font-bold">
          <span className="text-ctp-green">&gt;</span>
          <h1>
            Olá! Sou o <span className="text-ctp-green">Kessleru</span>
          </h1>
        </div>
        <div className='text-ctp-subtext-0 text-balance'>
          <p className='mb-4'>
            Sou estudante de Ciência da Computação com foco em desenvolvimento
            web <span className="text-ctp-green/80">full stack</span> utilizando o ecossistema do <span className="text-ctp-green/80">JavaScript.</span>
          </p>
          <p>
            Meu aprendizado é orientado a projetos práticos e cursos
            aprofundados, o que me permite consolidar conceitos por meio da
            aplicação real e do desenvolvimento de soluções funcionais.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
