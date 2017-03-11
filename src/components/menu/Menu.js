import React from 'react';
import './Menu.css';
import miers_logo from './miers_logo.jpg';

var Menu = require('react-burger-menu').pushRotate;

var Coolmenu = React.createClass({
  showSettings: function(event) {
    event.preventDefault();
  },
  render: function() {
    return (
      <Menu>
        <img src={miers_logo} className="menulogo" alt="logo" />
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
});

export default Coolmenu;
