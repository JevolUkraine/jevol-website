export function ImgBox({
  label = "IMAGE",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-zinc-600 bg-zinc-800 text-xs font-bold uppercase tracking-wide text-zinc-400 ${className}`}
    >
      {label}
    </div>
  );
}

export function TextLine({ className = "" }: { className?: string }) {
  return <div className={`rounded bg-zinc-300 ${className}`} />;
}
