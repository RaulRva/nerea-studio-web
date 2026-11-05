export function Dumbbell({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <g transform="translate(0 16)">
        <rect x="2" y="6" width="7" height="20" rx="1.5" fill="currentColor" />
        <rect x="11" y="9" width="6" height="14" rx="1.5" fill="currentColor" />
        <rect x="17" y="14" width="30" height="4" rx="1" fill="currentColor" />
        <rect x="47" y="9" width="6" height="14" rx="1.5" fill="currentColor" />
        <rect x="55" y="6" width="7" height="20" rx="1.5" fill="currentColor" />
      </g>
    </svg>
  );
}

export function Apple({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 14c1.2-2.6 3.4-4.2 6.2-4.6-.4 2.8-1.8 4.8-3.6 6.1-1.6 1.1-3 1.4-2.6-1.5zM24.2 17.2c-4.8 0-8.7 3.8-8.7 9.4 0 6.6 4.4 12.4 8.2 12.4 1.5 0 2.4-1 4.3-1s2.7 1 4.3 1c3.6 0 8.2-6.2 8.2-12.6 0-5.4-3.6-9.2-8.3-9.2-2.2 0-3.8 1.1-4.9 1.1-1.2 0-2.2-1.1-3.1-1.1z"
      />
    </svg>
  );
}

export function Heart({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 39s-12.5-7.7-16.8-14.2C4.2 20.6 5.6 14 11.4 12.6c3.2-.8 6.2.6 8.1 3.2 1.9-2.6 4.9-4 8.1-3.2 5.8 1.4 7.2 8 4.2 12.2C36.5 31.3 24 39 24 39z"
      />
    </svg>
  );
}

const icons = { dumbbell: Dumbbell, apple: Apple, heart: Heart };

export function ServiceIcon({ name }) {
  const Icon = icons[name] ?? Dumbbell;
  return <Icon />;
}
