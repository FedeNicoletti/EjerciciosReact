import logo from './logo.svg';
import './App.css';
import ComponenteB from './components/container/ComponenteB';
import Clock from './components/pure/Clock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <ComponenteB></ComponenteB> */}
      <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
