import React from 'react';
import './Menu.css';
import miers_logo from './miers_logo.jpg';
import Radium from 'radium';
import { Link } from 'react-router-dom';

var Menu = require('react-burger-menu').scaleRotate;

var Coolmenu = React.createClass({
  showSettings: function(event) {
    event.preventDefault();
  },
  render: function() {
    return (
      <div>
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } isOpen={ false }>
      <div className="image-wrap">
        <img src={miers_logo} className="menulogo" alt="logo" />
      </div>
        <div className="menuLink"><Link className="menu-item" to="/info">Info</Link></div>
        <div className="menuLink"><Link className="menu-item" to="/bodydiagram">Bodydiagram</Link></div>
        <div className="menuLink"><Link className="menu-item" to="/parallax">Parallax</Link></div>
      </Menu>
      </div>
    );
  }
});

export default Coolmenu;
