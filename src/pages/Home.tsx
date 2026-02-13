import { type ReactNode } from 'react';
import TextType from '@/components/react-bits/TextType';
import Card from '@/components/ui/Card';

function highlightCode(text: string): ReactNode {
  const tokens: { text: string; className?: string }[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let match: RegExpMatchArray | null;

    if ((match = remaining.match(/^(?:const|let|var|function|return)\b/))) {
      tokens.push({ text: match[0], className: 'text-ctp-mauve' });
      remaining = remaining.slice(match[0].length);
    } else if ((match = remaining.match(/^'[^']*'?/))) {
      tokens.push({ text: match[0], className: 'text-ctp-green' });
      remaining = remaining.slice(match[0].length);
    } else if ((match = remaining.match(/^\d+/))) {
      tokens.push({ text: match[0], className: 'text-ctp-yellow' });
      remaining = remaining.slice(match[0].length);
    } else if ((match = remaining.match(/^[{}]/))) {
      tokens.push({ text: match[0], className: 'text-ctp-maroon' });
      remaining = remaining.slice(match[0].length);
    } else if ((match = remaining.match(/^:/))) {
      tokens.push({ text: match[0], className: 'text-ctp-green' });
      remaining = remaining.slice(match[0].length);
    } else {
      const last = tokens[tokens.length - 1];
      if (last && !last.className) {
        last.text += remaining[0];
      } else {
        tokens.push({ text: remaining[0] });
      }
      remaining = remaining.slice(1);
    }
  }

  return tokens.map((token, i) =>
    token.className ? (
      <span key={i} className={token.className}>
        {token.text}
      </span>
    ) : (
      token.text
    ),
  );
}

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
        <TextType
          as="pre"
          className="overflow-x-auto text-xs leading-relaxed text-ctp-code"
          text={`const pessoa = {\n  nome: 'Otávio Kessler Ustra',\n  idade: 20,\n  localizacao: 'Ituiutaba, MG - Brasil',\n  formacao: {\n    curso: 'Ciência da Computação',\n    instituicao: 'IFTM Ituiutaba',\n    status: 'Em andamento'\n  },\n};`}
          typingSpeed={20}
          showCursor={false}
          loop={false}
          cursorBlinkDuration={0}
          variableSpeed={{ min: 15, max: 40 }}
          renderText={highlightCode}
        />
      </Card>
    </section>
  );
}

export default Home;
