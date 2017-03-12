import React from 'react';
import './Ekg.css';



export default class Ekg extends React.Component{
  render(){
    return(
      <div className="ecg">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="-466.4 259.6 280.2 47.3" enableBackground="new -466.4 259.6 280.2 47.3" xmlSpace="preserve">
  <polyline fill="none" stroke="yellow" className="ekg" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="-465.4,281 -436,281 -435.3,280.6 -431.5,275.2 -426.9,281 -418.9,281 -423.9,281 -363.2,281 -355.2,269 -345.2,303 -335.2,263 -325.2,291 -319.2,281 -187.2,281 "/>
  </svg>
  </div>
    );
  }
}
