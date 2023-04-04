/**
 * Ejemplo de componente de tipo clase que dispone de los métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log("CONSTRUCTOR: Cuando se instancia el componente");
    }
    
    componentWillMount(){
        console.log("WillMount: Antes del montaje del componente");
    }

    componentDidMount(){
        console.log("DidMount: Justo al acabar el montaje del componente antes de renderizarlo");
    }
    
    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps: Si va a recibir nuevas props");
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Sirve para controlar si el componente debe o no actualizarse, retorna true o false
         * */
        console.log("shouldComponentUpdate: ");
    }

    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate: Justo antes de actualizarse");
    }

    componentDidUpdate(prevProp, prevState){
        console.log("componentDidUpdate: Justo después de actualizarse");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount: Cuando va a desaparecer el componente");
    }



    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
