import React from 'react';
import { Props } from '../interfaces/props';
import { secondsToTime } from '../utils/seconds-to-time';

export function Timer(props: Props) {
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
}
