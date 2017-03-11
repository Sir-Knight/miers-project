import React, { Component } from 'react';
import mierslogo from './assets/mierslogo.png';
import './App.css';
import Coolmenu from './components/menu/Menu';


class App extends Component {
  render() {
    return (

      <div id="outer-container">
        <Coolmenu noOverlay pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        </Coolmenu>
          <main id="page-wrap">
            <div className="App">

              <img src={mierslogo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>

              <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
              </p>

            </div>
          </main>
      </div>

    );
  }
}

export default App;
