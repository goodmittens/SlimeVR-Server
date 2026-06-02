import { useOnboarding } from '@/hooks/onboarding';
import { useLocalization } from '@fluent/react';
import { useState } from 'react';
import { SkipSetupWarningModal } from '@/components/onboarding/SkipSetupWarningModal';
import classNames from 'classnames';
import { Typography } from '@/components/commons/Typography';
import { Button } from '@/components/commons/Button';
import * as Sentry from '@sentry/react';

function TrackerBadge({
  animated,
  onMouseEnter,
  onAnimationEnd,
}: {
  animated: boolean;
  onMouseEnter: () => void;
  onAnimationEnd: () => void;
}) {
  return (
    <svg
      onMouseEnter={onMouseEnter}
      onAnimationEnd={onAnimationEnd}
      className={classNames(
        'absolute w-[92px] h-[92px] -right-2 -top-10',
        animated && 'animate-[bounce_1s_1]'
      )}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="26"
        y="12"
        width="40"
        height="68"
        rx="12"
        className="fill-background-50 stroke-background-20"
        strokeWidth="4"
      />
      <path
        d="M46 26v34M38 36h16M38 50h16"
        className="stroke-accent-background-20"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="26" cy="74" r="7" className="fill-status-special" />
      <circle cx="66" cy="74" r="7" className="fill-accent-background-20" />
    </svg>
  );
}

export function MountingChoose() {
  const { l10n } = useLocalization();
  const { applyProgress, skipSetup, state } = useOnboarding();
  const [animated, setAnimated] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  applyProgress(0.55);

  return (
    <>
      <div className="flex flex-col gap-5 h-full items-center w-full xs:justify-center relative overflow-y-auto px-4 pb-4">
        <div className="flex flex-col gap-8 justify-center">
          <div className="xs:w-10/12 xs:max-w-[666px]">
            <Typography variant="main-title">
              {l10n.getString('onboarding-choose_mounting')}
            </Typography>
            <Typography variant="standard" whitespace="whitespace-pre-line">
              {l10n.getString('onboarding-choose_mounting-description')}
            </Typography>
          </div>
          <div
            className={classNames(
              'grid xs:grid-cols-2 w-full xs:flex-row mobile:flex-col gap-4 [&>div]:grow'
            )}
          >
            <div
              className={classNames(
                'rounded-lg p-4 flex relative',
                !state.alonePage && 'bg-background-70',
                state.alonePage && 'bg-background-60'
              )}
            >
              <div className="bg-accent-background-30 absolute -left-4 -top-5 p-1.5 rounded-lg">
                <Typography variant="vr-accessible" italic>
                  {l10n.getString(
                    'onboarding-choose_mounting-auto_mounting-label-v2'
                  )}
                </Typography>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex flex-grow flex-col gap-4 max-w-sm">
                  <div>
                    <Typography variant="main-title" bold>
                      {l10n.getString(
                        'onboarding-choose_mounting-auto_mounting'
                      )}
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      {l10n.getString(
                        'onboarding-choose_mounting-auto_mounting-description'
                      )}
                    </Typography>
                  </div>
                </div>
                <Button
                  variant="primary"
                  to={'/onboarding/mounting/auto'}
                  className="self-start mt-auto"
                  onClick={() => {
                    Sentry.metrics.count('mounting_choose', 1, {
                      attributes: { choose: 'auto' },
                    });
                  }}
                  state={{ alonePage: state.alonePage }}
                >
                  {l10n.getString('onboarding-manual_mounting-auto_mounting')}
                </Button>
              </div>
            </div>
            <div
              className={classNames(
                'rounded-lg p-4 flex flex-row relative',
                !state.alonePage && 'bg-background-70',
                state.alonePage && 'bg-background-60'
              )}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-grow flex-col gap-4 max-w-sm">
                  <div>
                    <TrackerBadge
                      onMouseEnter={() => setAnimated(() => true)}
                      onAnimationEnd={() => setAnimated(() => false)}
                      animated={animated}
                    />
                    <Typography variant="main-title" bold>
                      {l10n.getString(
                        'onboarding-choose_mounting-manual_mounting'
                      )}
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      {l10n.getString(
                        'onboarding-choose_mounting-manual_mounting-description'
                      )}
                    </Typography>
                  </div>
                </div>

                <Button
                  variant={!state.alonePage ? 'secondary' : 'tertiary'}
                  to="/onboarding/mounting/manual"
                  className="self-start mt-auto"
                  state={{ alonePage: state.alonePage }}
                  onClick={() => {
                    Sentry.metrics.count('mounting_choose', 1, {
                      attributes: { choose: 'manual' },
                    });
                  }}
                >
                  {l10n.getString(
                    'onboarding-automatic_mounting-manual_mounting'
                  )}
                </Button>
              </div>
            </div>
          </div>
          {!state.alonePage && (
            <Button
              variant="secondary"
              className="self-start"
              to="/onboarding/trackers-assign"
            >
              {l10n.getString('onboarding-previous_step')}
            </Button>
          )}
        </div>
      </div>
      <SkipSetupWarningModal
        accept={skipSetup}
        onClose={() => setShowWarning(false)}
        isOpen={showWarning}
      />
    </>
  );
}
