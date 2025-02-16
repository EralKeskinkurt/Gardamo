interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`rounded-3xl px-4 py-1.5 transition-all ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
