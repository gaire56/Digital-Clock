import React, { useState } from 'react';

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(UpdateTime, 1000);
  return (
    <div className="app">
      <h1>{currentTime}</h1>
    </div>
  );
};

export default App;
