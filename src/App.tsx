import React from 'react';
import logo from './assets/logo192.png';
import './App.scss';
import {provider, useInstance} from 'react-ioc';
import { Stores } from "./stores";
import {observer} from "mobx-react";

function App() {
  const { app } = useInstance(Stores);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React + {app.counter} + {app.counterV2}
        </a>
        <div>
          <button onClick={app.inc}>+1</button>
        </div>
      </header>
    </div>
  );
}

export default provider(
    Stores
)(observer(App));
