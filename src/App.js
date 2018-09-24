import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appStore from './appStore';
import Table from './components/Table'
import Controls from './components/Controls';
import { observer } from 'mobx-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React MobX</h1>
        </header>
        <Table store = {appStore}/>
        <Controls store = { appStore } />
        <div>
          {
            appStore.averageSalary > 1200 
            ? (
              <h2>Your company average salary is good</h2>
              ) 
            : (
              <h1>Your company average salary is too low</h1>
              )
          }
        </div>
      </div>
    );
  }
}

App = observer(App)

export default App;
