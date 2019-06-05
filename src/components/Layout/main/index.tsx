import React, { ReactElement } from 'react';
import './style.scss';

export default function Main(props: any): ReactElement {
  return (
    <div className="main-wrap">{props.children}</div>
  );
}