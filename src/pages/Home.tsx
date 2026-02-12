import MetaBalls from '@/components/ReactBits/MetaBalls';

function Home() {
  return (
    <section className="content-container grid grid-cols-2">
      <div>
        <div className="flex gap-4 mb-6 text-3xl font-bold">
          <span className="text-ctp-green">&gt;</span>
          <h1>
            Olá! Sou o <span className="text-ctp-green">Kessleru</span>
          </h1>
        </div>
        <div className="text-ctp-subtext-0 text-balance text-xl">
          <p className="mb-4">
            Sou estudante de Ciência da Computação com foco em desenvolvimento
            web <span className="text-ctp-green/80">full stack</span> utilizando
            o ecossistema <span className="text-ctp-green/80">JavaScript.</span>
          </p>
          <p>
            Meu aprendizado é orientado a projetos práticos e cursos
            aprofundados, o que me permite consolidar conceitos por meio da
            aplicação real e do desenvolvimento de soluções funcionais.
          </p>
        </div>
      </div>
      <div className="cursor-none bg-ctp-mantle/40 p-1 rounded-md border-2 border-ctp-crust/20 aspect-square w-full max-w-sm justify-self-end">
        <MetaBalls
          color="var(--ctp-green)"
          cursorBallColor="var(--ctp-green)"
          cursorBallSize={1.5}
          ballCount={20}
          animationSize={25}
          enableMouseInteraction
          enableTransparency={true}
          hoverSmoothness={0.15}
          clumpFactor={1.1}
          speed={0.2}
        />
      </div>
    </section>
  );
}

export default Home;
