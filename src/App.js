import './App.css';
import PersonClass from './components/PersonClass';
import PersonFunction from './components/PersonFunction';
import PersonStateClass from './components/PersonStateClass';
import PersonStateFunction from './components/PersonStateFunction';

function App() {

  const personName = "Narendra Modi";
  const cities = ["City1", "City2", "City3"];

  return (
    <div className="App">
      <h1>Welcome to React JS!!!</h1>
      <PersonClass personName={personName} cities={cities} />
      <PersonFunction personName={personName} cities={cities} />
      <PersonStateClass />
      <PersonStateFunction />
    </div>
  );
}

export default App;
