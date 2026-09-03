// Styled static fallback for the ambient 3D leaf field — renders when WebGL
// is unavailable, before the canvas mounts, or as the dynamic-import loading
// state. Never a blank div: a soft radial gold glow plus faint leaf-vein SVG
// strokes at the hero edges, echoing the R3F scene it stands in for.
export default function HeroFallback() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute -left-24 top-1/4 h-[420px] w-[420px] opacity-20 blur-[1px]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,162,39,0.35) 0%, rgba(201,162,39,0) 70%)",
        }}
      />
      <div
        className="absolute -right-24 bottom-0 h-[480px] w-[480px] opacity-15 blur-[1px]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,162,39,0.3) 0%, rgba(201,162,39,0) 70%)",
        }}
      />
      <svg
        className="absolute -left-16 top-10 h-72 w-72 opacity-[0.18]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 10 C 40 40, 20 110, 100 190 C 180 110, 160 40, 100 10 Z"
          stroke="#C9A227"
          strokeWidth="1"
        />
        <path d="M100 20 L100 180" stroke="#C9A227" strokeWidth="0.75" />
        {[40, 70, 100, 130, 160].map((y) => (
          <path
            key={y}
            d={`M100 ${y} L${60} ${y - 20} M100 ${y} L${140} ${y - 20}`}
            stroke="#C9A227"
            strokeWidth="0.5"
          />
        ))}
      </svg>
      <svg
        className="absolute -right-10 bottom-0 h-80 w-80 rotate-45 opacity-[0.14]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 10 C 40 40, 20 110, 100 190 C 180 110, 160 40, 100 10 Z"
          stroke="#C9A227"
          strokeWidth="1"
        />
        <path d="M100 20 L100 180" stroke="#C9A227" strokeWidth="0.75" />
      </svg>
    </div>
  );
}
