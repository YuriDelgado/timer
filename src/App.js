import React, { useState } from 'react';
import useInterval from './helpers/useInterval';
import toTime from './helpers/time';
import TimeContainer from './components/TimeContainer';

import './App.css';

function App() {
  const initCount = 129672;
  const [count, setCount] = useState(initCount);
  const [isRunning, setIsRunning] = useState('stop');

  // get time object based on seconds given
  const time = toTime(count);

  useInterval(counter, isRunning === 'stop' ? 1000 : null);

  function counter() {
    if (count === 0) {
      setIsRunning('on');
      setCount(initCount)
    } else {
      setCount(count - 1);
    }
  }

  const timerHandler = () => {
    setIsRunning(isRunning === 'on' ? 'stop' : 'on');
  }

  return (
    <div className="App">
      <container id="timer">
        <div>
          <TimeContainer label="Days" time={parseInt(time.days)} />
          <TimeContainer label="Hours" time={parseInt(time.hours)} />
          <TimeContainer label="Minutes" time={parseInt(time.minutes)} />
          <TimeContainer label="Seconds" time={time.seconds} />
        </div>
        <button type="button" onClick={timerHandler}>{isRunning}</button>
      </container>
    </div>
  );
}

export default App;
