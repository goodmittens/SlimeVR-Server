export function SlimeVRIcon({ drag }: { drag?: boolean }) {
  return (
    <svg
      width="49"
      height="29"
      viewBox="0 0 49 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-electron-drag-region={drag}
    >
      <path
        d="M5 23.5h16.5L32.5 5 44 23.5"
        stroke="#4FD3C6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 23.5 32.5 23.5"
        stroke="#F59B4E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32.5 5v18.5"
        stroke="#FFFFFF"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="5" cy="23.5" r="2.5" fill="#4FD3C6" />
      <circle cx="21.5" cy="23.5" r="2.5" fill="#F59B4E" />
      <circle cx="32.5" cy="5" r="2.5" fill="#4FD3C6" />
      <circle cx="44" cy="23.5" r="2.5" fill="#F59B4E" />
    </svg>
  );
}
