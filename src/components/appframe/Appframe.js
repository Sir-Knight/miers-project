import React from 'react';
import './Appframe.css';
import Bodydiagram from '../bodydiagram/Bodydiagram';

export default class Appframe extends React.Component{
  render(){
    return(
      <div className="Appframe">
      <div className="wrap">
       <div className="letter">
         <div className="letter-g">
         <Bodydiagram />
         </div>
       </div>
      </div>
      </div>
    );
  }
}
