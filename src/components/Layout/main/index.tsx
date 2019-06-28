import React, { ReactElement } from 'react';
import './style.scss';

const Main: React.FC<React.Component> = props => {
  return (
    <div className="main-wrap">{props.children}</div>
  );
};

export default Main;