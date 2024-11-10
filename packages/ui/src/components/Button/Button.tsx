/**
 * A simple button component
 */
export function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="bg-slate-400 p-4">
      {children}
    </button>
  );
}
