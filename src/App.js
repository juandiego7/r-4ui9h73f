import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.onChangeInput} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }

  onChangeInput = (e) => {
    this.setState({
      text: e.target.value
    });
  }
}

export default App;
