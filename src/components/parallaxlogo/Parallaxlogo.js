import React from 'react';
import AtvImg from 'react-atv-img';
import './Parallaxlogo.css';
import mierslogo from './mierslogo.png';
import body from './body.png';
import ball from './ball.png';
import leg from './leg.png';


export default class Parallaxlogo extends React.Component{
  render(){

    return(
      <div className="Parallaxlogo">
       <AtvImg
         layers={[
           leg,
           ball,
           body,
         ]}
         staticFallback="mierslogo"
         style={{ width: 520 , height: 520 }}
       />
      </div>
    );
  }
}
