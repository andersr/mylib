export function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="border rounded py-2 px-8 bg-white">
      {children}
    </button>
  );
}
