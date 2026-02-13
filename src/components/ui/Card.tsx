import reactLogo from '../../assets/React.svg';

type CardProps = {
  children: React.ReactNode;
  fileName?: string;
  className?: string;
};

function Card({ children, fileName = 'nome.tsx', className = '' }: CardProps) {
  return (
    <div className={`pt-4 relative ${className}`}>
      <div className="inline-flex items-center gap-2 rounded-t-lg border-x-2 border-t-2 border-ctp-crust/20 bg-ctp-mantle px-4 py-1 text-sm font-medium text-ctp-text absolute -top-3">
        <img src={reactLogo} alt="React Logo" className="h-4 w-4" />
        <span>{fileName}</span>
      </div>

      <div className="rounded-b-lg rounded-tr-lg border-2 border-ctp-crust/20 bg-ctp-mantle/40 p-4 shadow-md">
        {children}
      </div>
    </div>
  );
}

export default Card;
