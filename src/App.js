import React, { Component } from 'react';
import mierslogo from './assets/mierslogo.png';
import './App.css';
import Coolmenu from './components/menu/Menu';
import Appframe from './components/appframe/Appframe';
import Footer from './components/footer/Footer';
import Clock from './components/clock/Clock';



class App extends Component {
  render() {
    return (

      <div id="outer-container">
        <Coolmenu />
          <main id="page-wrap">
            <div className="App">
              <img src={mierslogo} className="App-logo" alt="logo" />
              <Clock />
              <Appframe />
              <Footer />
            </div>
          </main>
      </div>

    );
  }
}

export default App;
