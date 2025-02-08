interface Props {
  children?: React.ReactNode;
}
export default function FiltersSection({ children }: Props) {
  return (
    <div className="flex flex-col items-start justify-start w-60 border border-text/20 h-screen overflow-y-auto rounded-lg scroll-block">
      {children}
    </div>
  );
}
