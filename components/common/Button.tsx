interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: Props) {
  return (
    <button
      className={`rounded-3xl px-4 py-1.5 transition-all ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
