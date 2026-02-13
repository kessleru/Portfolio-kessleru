import { useEffect, useState } from "react";
import { Menu } from 'lucide-react';

function Header() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    function handleSize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleSize();
    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, [])

  return (
    <header className="flex justify-between shadow-md bg-ctp-mantle/40 p-1 rounded-full border-2 border-ctp-crust/20 mb-36">
      <div className='ml-4 tracking-widest relative after:content-[""] after:ml-0.5 after:inline-block after:w-2 after:h-4 after:bg-ctp-green after:top-1 after:absolute after:cursor-blink *:mr-px'>
        <span className="text-ctp-green font-medium">~</span>
        <span>/</span>
        <span>home</span>
        <span>/</span>
      </div>
      {isMobile ? (
        <button className="text-ctp-green mr-4 cursor-pointer">
          <Menu />
        </button>
      ) : (
        <nav className="flex items-center gap-2 mr-4">
          {['Home', 'Projects', 'Academic', 'Contact'].map(
            (item, index, items) => (
              <span key={item} className="flex items-center">
                <a className="relative text-base cursor-pointer hover:text-ctp-green">
                {item}
              </a>
              {index !== items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="ml-2 text-ctp-overlay-0 select-none pointer-events-none"
                >
                  |
                </span>
              )}
            </span>
          )
        )}
      </nav>
      )}
    </header>
  );
}

export default Header;
