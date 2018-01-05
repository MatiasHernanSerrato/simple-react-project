import React, { Component } from 'react';

const nombreCompleto = 'Jhon Papa';
var objeto = {
  nombreCompleto: 'Carl Tomato',
  propiedad: {
    nombreCompleto: 'Carlos Lechuga',
    getNombreCompleto: function() {
      return nombreCompleto;
    }
  }
};

let prueba = objeto.propiedad.getNombreCompleto;

class App extends Component {
  constructor(props){
    super(props);
    this.getFirstConsoleLog = this.getFirstConsoleLog.bind(this);
    this.getSecondConsoleLog = this.getSecondConsoleLog.bind(this);
  }

  getFirstConsoleLog() {
    return objeto.propiedad.getNombreCompleto();
  }

  getSecondConsoleLog() {
    return prueba();
  }

  render() {
    const { getFirstConsoleLog, getSecondConsoleLog } = this;
    return (
      <div className="App">
        <p>{getFirstConsoleLog()}</p>
        <p>{getSecondConsoleLog()}</p>
      </div>
    );
  }
}

export default App;
