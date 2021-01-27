import React, { useState } from 'react';

const App = () => {
  const time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);
  return (
    <div className="app">
      <h1>{currentTime}</h1>
    </div>
  );
};

export default App;
