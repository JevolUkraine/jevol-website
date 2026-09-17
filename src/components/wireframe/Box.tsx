export function ImgBox({
  label = "IMAGE",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-gray-400 bg-gray-200 text-xs font-medium uppercase tracking-wide text-gray-500 ${className}`}
    >
      {label}
    </div>
  );
}

export function TextLine({ className = "" }: { className?: string }) {
  return <div className={`rounded bg-gray-300 ${className}`} />;
}
