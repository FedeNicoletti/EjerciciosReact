/**
 * Ejemplos de uso de los siguientes hooks:
 * useState()
 * useRef()
 * useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';


const Ejemplo2 = () => {
    // Vamos a crear dos contadores, cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable con un elmeento del DOM del componente.

    const miRef = useRef()

    function incrementarUno(){
        setContador1( contador1 + 1 )
    }

    function incrementarDos(){
        setContador2( contador2 + 1 )
    }

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? CASO 1: Ejecutar SIEMPRE un snippet de código.
     * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esté dentro del useEffect()
     */
 /*    useEffect(() => {
       console.log("Cambio en el estado del Componente");
       console.log("Mostrando referencia a elemento del DOM:");
       console.log(miRef);
    }); */

      /**
     * ? CASO 2: Ejecutar solo cuando cambie CONTADOR 1.
     * Cada vez que haya un cambio en el estado del contador 1 se ejecuta aquello que esté dentro del useEffect()
     */
   /*    useEffect(() => {
        console.log("Cambio en el estado del CONTADOR 1");
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(miRef);
     }, [contador1]);
 */
      /**
     * ? CASO 3: Ejecutar solo cuando cambie CONTADOR 1  o CONTADOR 2.
     * Cada vez que haya un cambio en el estado del contador 1 o el contador 2 se ejecuta aquello que esté dentro del useEffect()
     * si hay un cambio en algun otro estado, no se ejecuta el useEffect (suponiendo por ejemplo un contador 3)
     */
      useEffect(() => {
        console.log("Cambio en el estado del CONTADOR 1 o CONTADOR 2");
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(miRef);
     }, [contador1, contador2]);


    return (
        <div>
             <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/*Elemento referenciado*/}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado.
            </h4>
            <button onClick={incrementarUno}>Incrementar contador 1</button>
            <button onClick={incrementarDos}>Incrementar contador 2</button>
        </div>
        </div>
    );
}

export default Ejemplo2;

