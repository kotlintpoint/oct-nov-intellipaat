import React, { useState } from 'react'

const PersonStateFunction = () => {

    // hooks - useState, useEffect, useReducer, etc... 

    // to handle state useState hoook will helpful 

    const [count, setCount] = useState(1);

    const handleChange = () => {
        setCount(count + 1);
    }

    const handleChangeFiveTimes = () => {
        for(let i=1; i<=5; i++){
            setCount((prevCount) => prevCount+1);
        }
    }

  return (
    <div>
      <h2>Person State Function Demo</h2>
      <h3>Count : {count}</h3>
      <button onClick={handleChange}>Change Count</button>
      <button onClick={handleChangeFiveTimes}>Change Count 5 times</button>
    </div>
  )
}

export default PersonStateFunction
