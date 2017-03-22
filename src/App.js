import React from 'react';
import mierslogo from './assets/mierslogo.png';
import './App.css';
import Coolmenu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Clock from './components/clock/Clock';
import Bodydiagram from './components/bodydiagram/Bodydiagram';
import { Router, Route, hashHistory } from 'react-router';



export default class App extends React.Component{
  render() {
    return (

      <div id="outer-container">
        <Coolmenu />
          <main id="page-wrap">
            <div className="App">
              <img src={mierslogo} className="App-logo" alt="logo" />
              <Clock />
              <div className="Appframe">
              <div className="wrap">
               <div className="letter">
                 <div className="letter-g">
                    {this.props.children}
                 </div>
               </div>
              </div>
              </div>
              <Footer />
            </div>
          </main>
      </div>

    );
  }
}
