import React from 'react';
import './TimeContainer.css';

function TimeContainer(props) {
  return (
    <div id="time-box">
      <div>
        <div>
          {props.time}
        </div>
        <span>{props.label}</span>
      </div>
    </div>
  );
}

export default TimeContainer;