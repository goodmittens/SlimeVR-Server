import { useLocalization } from '@fluent/react';
import { useOnboarding } from '@/hooks/onboarding';
import { Button } from '@/components/commons/Button';
import { SlimeVRIcon } from '@/components/commons/icon/SimevrIcon';
import { LangSelector } from '@/components/commons/LangSelector';
import { Typography } from '@/components/commons/Typography';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '@/branding';

function MocapHeroArt() {
  return (
    <svg
      aria-hidden
      className="absolute inset-x-0 bottom-0 mx-auto w-[min(92vw,860px)] h-auto max-h-[55%]"
      viewBox="0 0 900 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 330h900v190H0z" className="fill-background-70" />
      <g className="stroke-background-50" strokeWidth="2" opacity="0.65">
        <path d="M100 500h700M140 460h620M180 420h540M220 380h460M260 340h380" />
        <path d="M120 520 330 330M260 520l120-190M450 520V330M640 520 520 330M780 520 570 330" />
      </g>
      <g strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M450 130v112M450 180l-86 76M450 180l86 76M450 242l-72 130M450 242l72 130"
          className="stroke-background-10"
          strokeWidth="12"
        />
        <path
          d="M391 205h118M384 318h132"
          className="stroke-accent-background-20"
          strokeWidth="8"
          opacity="0.85"
        />
        <circle
          cx="450"
          cy="104"
          r="34"
          className="stroke-background-10 fill-background-80"
          strokeWidth="10"
        />
      </g>
      <g
        className="fill-accent-background-20 stroke-background-90"
        strokeWidth="6"
      >
        <rect x="351" y="238" width="31" height="43" rx="8" />
        <rect x="518" y="238" width="31" height="43" rx="8" />
        <rect x="361" y="356" width="31" height="43" rx="8" />
        <rect x="508" y="356" width="31" height="43" rx="8" />
        <rect
          x="433"
          y="221"
          width="34"
          height="44"
          rx="8"
          className="fill-status-special"
        />
      </g>
      <g
        className="stroke-status-special"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M167 242h98v98h-98z" />
        <path d="M198 211h98v98h-98z" opacity="0.65" />
        <path d="M167 242 198 211M265 242l31-31M265 340l31-31" />
      </g>
      <g
        className="stroke-accent-background-20"
        strokeWidth="6"
        strokeLinecap="round"
      >
        <path d="M638 270c34-36 84-36 118 0" />
        <path d="M664 298c20-20 46-20 66 0" />
        <path d="M697 326h.1" />
      </g>
    </svg>
  );
}

export function HomePage() {
  const nav = useNavigate();
  const { l10n } = useLocalization();
  const { applyProgress, onboardingStarted } = useOnboarding();

  applyProgress(0.1);

  const start = () => {
    onboardingStarted();
    nav('/onboarding/quiz/slime-set');
  };

  return (
    <>
      <div className="flex relative flex-col gap-5 h-full items-center w-full justify-center px-4 overflow-clip">
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-background-70" />
        <div className="absolute inset-x-0 bottom-[42%] h-px bg-accent-background-30" />
        <MocapHeroArt />
        <div className="flex flex-col gap-5 items-center z-10 scale-150 mb-20">
          <SlimeVRIcon />
          <Typography variant="mobile-title">{APP_NAME}</Typography>
          <Button variant="primary" onClick={start}>
            {l10n.getString('onboarding-home-start')}
          </Button>
        </div>
        <div className="absolute right-4 bottom-4 z-50">
          <LangSelector />
        </div>
      </div>
    </>
  );
}
