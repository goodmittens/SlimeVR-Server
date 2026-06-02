import classNames from 'classnames';

export enum SlimeState {
  HAPPY,
  SAD,
  JUMPY,
  CURIOUS,
}

export function LoaderIcon({
  slimeState = SlimeState.HAPPY,
  size = 85,
}: {
  slimeState: SlimeState;
  size?: number | string;
}) {
  const accentClass = {
    [SlimeState.HAPPY]: 'stroke-status-success fill-status-success',
    [SlimeState.SAD]: 'stroke-status-critical fill-status-critical',
    [SlimeState.JUMPY]: 'stroke-accent-background-20 fill-accent-background-20',
    [SlimeState.CURIOUS]: 'stroke-status-special fill-status-special',
  }[slimeState];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      role="img"
      aria-label="Tracker status"
      className="overflow-visible"
    >
      <g
        className={classNames(
          slimeState === SlimeState.JUMPY && 'animate-spin-ccw'
        )}
        style={{ transformOrigin: '48px 48px' }}
      >
        <rect
          x="30"
          y="21"
          width="36"
          height="54"
          rx="10"
          className="fill-background-70 stroke-background-30"
          strokeWidth="4"
        />
        <path
          d="M48 33v29M40 41h16M40 54h16"
          className={accentClass}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <g className={accentClass}>
        <circle cx="48" cy="12" r="5" />
        <circle cx="20" cy="77" r="5" />
        <circle cx="76" cy="77" r="5" />
      </g>
      <path
        d="M48 17 20 72M48 17l28 55M20 77h56"
        className={accentClass}
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
}
