import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/componente.class';

const ComponenteA = ({ contacto }) => {
    return (
        <div>
        <h2>
           Nombre: { contacto.name }
        </h2>
        <h2>
            Apellido: { contacto.apellido }
        </h2>
        <h3>
            Email: { contacto.email }
        </h3>
        <h5>
            This contact is: { contacto.conectado ? "CONECTADO" : "DESCONECTADO" }
        </h5>
    </div>
    );
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteA;
