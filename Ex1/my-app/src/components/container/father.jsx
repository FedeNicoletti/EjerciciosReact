import React, {useState} from 'react';
import Child from '../pure/child';

export const Father = () => {

    const [name, setName] = useState("Nombre");
   

    function showMessage(text){
        alert(`Message received: ${text}`)
    }

    function updateName(newName){
        setName(newName)
    }




    return (
        <div>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}


