import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { PomodoroTimerProps } from '../interfaces/pomodoro-timer-props';
import { Button } from './button.';
import { Timer } from './timer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PomodoroTimer(props: PomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="Start" className="button-start" onClick={() => console.log('Start')}></Button>
      <Button text="Stop" className="button-stop" onClick={() => console.log('Stop')}></Button>
      <Button text="Restart" className="button-restart" onClick={() => console.log('Restart')}></Button>
    </div>
  );
}
