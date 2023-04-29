import React, { useState, useEffect } from 'react';
import "./style.css"
function App()  {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const hourFormatted = hour % 12 === 0 ? 12 : hour % 12;
  const minuteFormatted = minute < 10 ? `0${minute}` : minute;
  const secondFormatted = second < 10 ? `0${second}` : second;
  const ampm = hour < 12 ? 'AM' : 'PM';

  return (
    <div className="clock-container">
      <div className="background" style={{transform: `rotate(${(6 * second)}deg)`}}></div>
      <div className="clock">
        <div className="digits">
          {hourFormatted}:{minuteFormatted}:{secondFormatted} {ampm}
        </div>
      </div>
    </div>
  );
};



export default App;
