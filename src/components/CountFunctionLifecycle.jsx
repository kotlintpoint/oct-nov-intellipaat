import React, { useEffect, useState } from 'react'

const CountFunctionLifecycle = () => {
    /*
        useEffect hooks can help you handle life cycle methods
    */

    const [count, setCount] = useState(1);
    const [userName, setUserName] = useState("Google");

    useEffect(() => {
        // componentDidMount - get call one time only 
        console.log("componentDidMount-useEffect");
        const countValue = localStorage.getItem("countF");
        if(countValue){
            setCount(parseInt(countValue));
        }
    },[]);

    useEffect(() => {
        // componentDidUpdate - get multiple time call when count update
        console.log("componentDidUpdate-useEffect");

        return () => {
            // componentWillUnmount - get call when component remove from page
            console.log("componentWillUnmount-useEffect1");
            localStorage.setItem("countF", count);
        }

    },[count]);

    /*
    useEffect(() => {
        // get call for each state update 
    });
    */

  return (
    <div style={{ backgroundColor: 'green'}}>
      <h2>Count Function Lifecycle Demo</h2>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CountFunctionLifecycle
