import React, { useState } from 'react';

const App = () => {
  //creat aero function
  let time = new Date().toLocaleTimeString(); // get local machine time

  const [currentTime, setCurrentTime] = useState(time); // hooks using useState

  const UpdateTime = () => {
    // create function called UpdateTiem to update on screen
    time = new Date().toLocaleTimeString(); //call local machine time
    setCurrentTime(time); // change current time into time
  };

  setInterval(UpdateTime, 1000); // using setInterval for fetch time second by second
  return (
    <div className="app">
      {' '}
      {/*div created */}
      <h1>{currentTime}</h1> {/*using js expression for display time */}
    </div>
  );
};

export default App; // Export app
