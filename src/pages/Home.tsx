import Card from '@/components/ui/Card';

function Home() {
  return (
    <section className="content-container grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-lg:gap-12">
      <div>
        <div className="mb-4 flex flex-wrap items-center gap-2 text-2xl font-bold">
          <span className="text-ctp-green">&gt;</span>
          <h1>
            Olá! Sou o <span className="text-ctp-green">Kessleru</span>
          </h1>
        </div>
        <div className="w-full text-balance max-w-[60ch] text-base text-ctp-subtext-0">
          <p className="mb-2">
            Sou estudante de Ciência da Computação com foco em desenvolvimento
            web{' '}
            <span className="border-b-2 border-ctp-green/80 border-dashed text-ctp-green/80">
              Full Stack
            </span>{' '}
            utilizando o ecossistema{' '}
            <span className="border-b-2 border-ctp-green/80 border-dashed text-ctp-green/80">
              JavaScript
            </span>
            .
          </p>
          <p>
            Meu aprendizado é orientado a projetos práticos e cursos
            aprofundados, o que me permite consolidar conceitos por meio da
            aplicação real e do desenvolvimento de soluções funcionais.
          </p>
        </div>
      </div>
      <Card fileName="Perfil.tsx" className="w-full justify-self-start">
        <pre className="overflow-x-auto text-xs leading-relaxed text-ctp-code">
          <code>
            <span>
              <span className="text-ctp-mauve">const</span> pessoa ={' '}
              <span className="text-ctp-maroon">{'{'}</span>
            </span>
            <br />
            <span>
              {'  '}nome<span className="text-ctp-green">{':'}</span>{' '}
              <span className="text-ctp-green">'Otávio Kessler Ustra'</span>,
            </span>
            <br />
            <span>
              {'  '}idade<span className="text-ctp-green">{':'}</span>{' '}
              <span className="text-ctp-yellow">20</span>,
            </span>
            <br />
            <span>
              {'  '}localizacao<span className="text-ctp-green">{':'}</span>{' '}
              <span className="text-ctp-green">'Ituiutaba, MG - Brasil'</span>,
            </span>
            <br />
            <span>
              {'  '}formacao<span className="text-ctp-green">{':'}</span>{' '}
              <span className="text-ctp-maroon">{'{'}</span>
            </span>
            <br />
            <span>
              {'    '}curso<span className="text-ctp-green">{':'}</span>{' '}
              <span className="text-ctp-green">'Ciência da Computação'</span>,
            </span>
            <br />
            <span>
              {'    '}instituicao<span className="text-ctp-green">{':'}</span>{' '}
              <span className="text-ctp-green">'IFTM Ituiutaba'</span>,
            </span>
            <br />
            <span>
              {'    '}status<span className="text-ctp-green">{':'}</span>{' '}
              <span className="text-ctp-green">'Em andamento'</span>
            </span>
            <br />
            <span>
              {'  '}
              <span className="text-ctp-maroon">{'}'}</span>,
            </span>
            <br />
            <span>
              <span className="text-ctp-maroon">{'}'}</span>;
            </span>
          </code>
        </pre>
      </Card>
    </section>
  );
}

export default Home;
