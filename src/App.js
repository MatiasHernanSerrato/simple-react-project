import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.nombreCompleto = 'John Papa';
    this.objeto = {
      nombreCompleto: 'Carl Tomato',
      propiedad: {
        nombreCompleto: 'Carlos Lechuga',
        getNombreCompleto: () => {
          return this.nombreCompleto;
        }
      }
    };
  }

  getFirstConsoleLog = () => {
    return this.objeto.propiedad.getNombreCompleto();
  }

  getSecondConsoleLog = () => {
    const prueba = this.objeto.propiedad.getNombreCompleto;
    return prueba();
  }

  render() {
    const firstMessage  = this.getFirstConsoleLog();
    const secondMessage = this.getSecondConsoleLog();
    return (
      <div className="App">
        <p>{firstMessage}</p>
        <p>{secondMessage}</p>
      </div>
    );
  }
}

export default App;
