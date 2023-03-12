import React from 'react';
import { Contacto } from '../../models/componente.class';
import ComponenteA from '../pure/ComponenteA';

const ComponenteB = () => {

    const defaultContact = new Contacto("Example", "Example", "Example@Example.com", false)
    return (
        <div>
          <div>
          Your Contacts:
          </div>
          <ComponenteA contacto={defaultContact}></ComponenteA> 
        </div>
    );
};


ComponenteB.propTypes = {

};


export default ComponenteB;
