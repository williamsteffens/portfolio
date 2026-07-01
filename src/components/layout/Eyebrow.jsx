export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3.5 mb-8 font-mono text-2xs tracking-widest2 uppercase text-rust font-semibold">
      <span className="block w-8 h-px bg-rust shrink-0" />
      {children}
    </div>
  );
}
