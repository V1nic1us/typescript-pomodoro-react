import React from 'react';
import { ButtonProps } from '../interfaces/button-props';

export function Button(props: ButtonProps): JSX.Element {
  return (
    <button className={`button ${props.className ? props.className : ''}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
