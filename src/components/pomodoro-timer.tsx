import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { PomodoroTimerProps } from '../interfaces/pomodoro-timer-props';
import { Button } from './button.';
import { Timer } from './timer';

export function PomodoroTimer(props: PomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.PomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Start" className="button-start" onClick={() => console.log('Start')}></Button>
        <Button text="Stop" className="button-stop" onClick={() => console.log('Stop')}></Button>
        <Button text="Restart" className="button-restart" onClick={() => console.log('Restart')}></Button>
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
