import React, { useState } from "react";

//  Definiendo estilos en constantes.

//? Estilo para usuario logeado
const loggedStyle = {
  color: "blue",
};
//? Estilo para usuario no logeado
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

// Generamos un estado para el componente y asi controlar el login del user
export default function Loginstyled(props) {
  const [logged, setLogged] = useState(false);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? <h1>Hola, {props.name}</h1> : <h1>Please, Login</h1>}

      <button
        onClick={() => {
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
}
