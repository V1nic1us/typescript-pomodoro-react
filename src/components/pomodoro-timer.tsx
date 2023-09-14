/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useInterval } from '../hooks/use-interval';
import { PomodoroTimerProps } from '../interfaces/pomodoro-timer-props';
import { Button } from './button.';
import { Timer } from './timer';

export function PomodoroTimer(props: PomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.PomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [working, resting]);

  useInterval(
    () => {
      if (mainTime > 0) setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWorking = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.PomodoroTime);
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    if (long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWorking()}></Button>
        <Button text={timeCounting ? 'Pause' : 'Play'} onClick={() => setTimeCounting(!timeCounting)}></Button>
        <Button text="Rest" className={!working && !resting ? 'hidden' : ''} onClick={() => configureRest(false)}></Button>
      </div>

      <div className="details">
        <p>Testando: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, officia.</p>
        <p>Testando: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, officia.</p>
        <p>Testando: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, officia.</p>
        <p>Testando: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, officia.</p>
      </div>
    </div>
  );
}
