import { useState } from 'react';
import './App.css';
import CountClassLifecycle from './components/CountClassLifecycle';
import CountFunctionLifecycle from './components/CountFunctionLifecycle';
import ClockClass from './components/ClockClass';
import Student from './components/Student';

function App() {

  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <h1>Welcome to React JS!!!</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Components
      </button>
      {/* Conditional Rendering */}
      {visible && <CountClassLifecycle />}
      <hr/>
      {visible && <CountFunctionLifecycle /> }
      <hr/>
      {visible ? <ClockClass /> : <h2>Clock class hidden!!!</h2>}
      <hr/>
      <Student firstName="Sachin" 
              lastName="Yadav" 
              email="sachin@gmail.com"
              age={15}
              rank={3} />
    </div>
  );
}

export default App;
