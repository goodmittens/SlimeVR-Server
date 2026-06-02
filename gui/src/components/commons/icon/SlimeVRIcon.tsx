export function SlimeVRIcon({ width = 28 }: { width?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 380 380">
      <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="#4FD3C6" strokeWidth="28" d="M63 280h116l78-160 80 160" />
        <path stroke="#F59B4E" strokeWidth="28" d="M179 280h78" />
        <path strokeWidth="18" d="M257 120v160" />
        <circle cx="63" cy="280" r="26" fill="#4FD3C6" stroke="none" />
        <circle cx="179" cy="280" r="26" fill="#F59B4E" stroke="none" />
        <circle cx="257" cy="120" r="26" fill="#4FD3C6" stroke="none" />
        <circle cx="337" cy="280" r="26" fill="#F59B4E" stroke="none" />
      </g>
    </svg>
  );
}
