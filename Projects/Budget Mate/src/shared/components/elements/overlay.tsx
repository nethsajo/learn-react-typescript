export function Overlay() {
  return (
    <div
      data-state="closed"
      className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      data-aria-hidden="true"
      aria-hidden="true"
    ></div>
  );
}
