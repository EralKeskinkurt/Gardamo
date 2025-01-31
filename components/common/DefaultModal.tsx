interface Props {
  children: React.ReactNode;
  handleSetIsModalOpen: (newBooleanData: boolean) => void;
}

export default function DefaultModal({
  children,
  handleSetIsModalOpen,
}: Props) {
  return (
    <div
      className={`fixed w-full h-full flex justify-center items-center left-0 top-0 z-20 `}
    >
      <div
        onClick={() => handleSetIsModalOpen(false)}
        className="bg-background/40 absolute w-full h-full"
      ></div>
      <div className="w-auto h-auto bg-white rounded-md text-white shadow-md p-3.5 relative z-10">
        {children}
      </div>
    </div>
  );
}
