import { useState, useEffect } from 'react';

const CountDown = ({ setStart }) => {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const playCountDown = () => {
      if (timer === 1) {
        clearTimeout(timeOut);
        setStart(false);
      }
      if (timer > 0) setTimer(timer - 1);
    };

    const timeOut = setTimeout(playCountDown, 1000);
    return () => clearTimeout(timeOut);
  }, [timer]);

  return <div className='countdown-number'>{timer}</div>;
};

export default CountDown;
