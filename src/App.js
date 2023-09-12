import React, {useState, useEffect} from 'react'
import './App.css';

const Timer = () => {

  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(()=> {

    let timerInterval;

  if (isActive) {

    timerInterval = setInterval(() => {

      if (milliseconds === 999) {
        setMilliseconds(0);
        setSeconds(seconds + 1);
      } else {
        setMilliseconds(milliseconds + 1);
      }
    }, 1);         
  } else {
    clearInterval(timerInterval);
  }

  return () => clearInterval(timerInterval);
}, [isActive, seconds, milliseconds]);

  const handlestart = () => {
    setIsActive(true);
  };
  const handlePause = () => {
    setIsActive(false);
  };
  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
    setMilliseconds(0);
  };
 
  return (
    <>
    <div className = 'timer'>
      <h1>Timer</h1>
      <p className = 'para'>
        Seconds : {seconds > 10 ? ` .${seconds}` :  seconds} :
        {milliseconds < 100 ? `  0.${milliseconds}` :  milliseconds}
      </p>
      <div>
        <button className = 'btn' onClick = {handlestart}>Start</button>
        <button className = 'btn' onClick = {handlePause}>Pause</button>
        <button className = 'btn' onClick = {handleReset}>Reset</button>
      </div>
    </div>
    </>
  );
}

export default Timer;
