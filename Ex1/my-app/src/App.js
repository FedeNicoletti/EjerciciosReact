import logo from "./logo.svg";
import "./App.css";
import ComponenteB from "./components/container/ComponenteB";
import Clock from "./components/pure/Clock";
import Greetings from "./components/pure/Greetings";
import GreetingsF from "./components/pure/GreetinsF";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import Loginstyled from "./components/pure/Loginstyled";
import { Father } from "./components/container/father";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 
        <ComponenteB></ComponenteB>
        <Greetings></Greetings>
        <GreetingsF></GreetingsF>
        <Clock></Clock> 
        <Ejemplo1/>
        <Ejemplo2/>
        <MiComponenteConContexto></MiComponenteConContexto>
             <Ejemplo4 nombre = "Federico">
        {Todo lo que hay acá se tratara como props.children}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
        <Loginstyled name="Federico"></Loginstyled>
        */}
        {/**Gestion de eventos*/}
        <Father></Father>
      </header>
    </div>
  );
}

export default App;
