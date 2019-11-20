import React from 'react';
import './TimeContainer.css';

function TimeContainer(props) {
  return (
    <div className="time-box">
      <div>
        {props.time}
      </div>
      <span>{props.label}</span>
    </div>
  );
}

export default TimeContainer;