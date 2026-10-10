import type { CSSProperties } from "react";

type FishArtProps = {
  color?: string;
  accent?: string;
  className?: string;
  variant?: number;
  label?: string;
};

export function FishArt({
  color = "#ff9b73",
  accent = "#ffd166",
  className,
  variant = 0,
  label = "Colorful fish",
}: FishArtProps) {
  const tail = variant % 2 === 0 ? "M34 50 8 28v44l26-22Z" : "M34 50 9 31l3 38 22-19Z";
  const pattern = variant % 3;
  return (
    <svg
      className={className}
      viewBox="0 0 112 100"
      role="img"
      aria-label={label}
      style={{ "--fish-color": color, "--fish-accent": accent } as CSSProperties}
    >
      <path d={tail} fill="var(--fish-accent)" stroke="#10314c" strokeWidth="3" strokeLinejoin="round" />
      <path
        d="M27 50c0-22 20-37 48-32 15 3 25 15 28 32-3 17-13 29-28 32-28 5-48-10-48-32Z"
        fill="var(--fish-color)"
        stroke="#10314c"
        strokeWidth="3"
      />
      <path
        d="M43 26c9 12 9 36 0 48M65 19c10 15 10 49 0 62"
        fill="none"
        stroke="var(--fish-accent)"
        strokeWidth={pattern === 1 ? "7" : "4"}
        strokeLinecap="round"
        opacity=".9"
      />
      {pattern === 2 ? (
        <path d="M37 52c14-12 35-12 53 0-18 12-39 12-53 0Z" fill="none" stroke="#fff8e7" strokeWidth="3" />
      ) : (
        <circle cx="81" cy="43" r="4" fill="#fff8e7" />
      )}
      <circle cx="88" cy="43" r="2" fill="#10314c" />
      <path d="M94 58q6 2 9 0" fill="none" stroke="#10314c" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 78q-2 9-11 12 11 2 18-8" fill="var(--fish-accent)" stroke="#10314c" strokeWidth="2" />
    </svg>
  );
}

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M5 20c8-10 18-12 27-2l5-5v14l-5-5C23 32 13 30 5 20Z" fill="currentColor" />
        <circle cx="25" cy="18" r="1.5" fill="#06203b" />
      </svg>
    </span>
  );
}

export function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}
