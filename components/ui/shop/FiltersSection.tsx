interface Props {
  children?: React.ReactNode;
}
export default function FiltersSection({ children }: Props) {
  return (
    <div className="flex flex-col items-start justify-start gap-0.5 w-72 border border-white/10 h-screen overflow-y-scroll">
      {children}
    </div>
  );
}
