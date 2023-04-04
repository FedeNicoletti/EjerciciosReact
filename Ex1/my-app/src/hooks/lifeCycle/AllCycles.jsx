import React, { useEffect } from "react";

const AllCycles = () => {
  useEffect(() => {
    console.log("Componente Creado");
    const intervalID = setInterval(() => {
      document.title = `${new Date()}`
      console.log("Actualización del componente");
    }, 1000);
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
      document.title = "Tiempo detenido"
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div>
      <h1>AllCycles</h1>
    </div>
  );
};

export default AllCycles;
