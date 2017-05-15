import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'ocbesbn-supplier-ui';

class App extends Component {
  state = {
    date: ''
  };

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DatePicker className="form-control"
          locale='en'
          format='dd/MM/yyyy'
          value={this.state.date}
          onChange={this.handleDateChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
