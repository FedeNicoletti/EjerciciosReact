import logo from './logo.svg';
import './App.css';
import ComponenteB from './components/container/ComponenteB';
import Componentec from './components/pure/ComponenteC';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <ComponenteB></ComponenteB> */}
      <ComponenteC></ComponenteC>
      </header>
    </div>
  );
}

export default App;
