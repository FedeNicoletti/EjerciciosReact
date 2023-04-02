import React, {useState} from "react";
import PropTypes from "prop-types";

const GreetingsF = (props) => {

    //Breve introducción a useState
    //const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setAge] = useState(23)
    const birthday = () =>{
        //actualizamos el State
        setAge(age +1)
    }
  return (
    <div>
      <h1>¡¡Hola {props.name} desde componente funcional!!</h1>
      <h2>Tu edad es {age} años.</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingsF.propTypes = {
    name: PropTypes.string,
};

export default GreetingsF;