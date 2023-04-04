/**
 * Ejemplo de uso de método DidUpdate en componente clase y
 * uso de Hooks en componente funcional
 */

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado"
    );
  }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado"
    );
  });
  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
};
