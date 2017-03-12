import React from 'react';
import './Gender.css';
import female from './female-08.jpg';

export default class Male extends React.Component{
  render(){
    return(

      <div className="gendermap">
      <img src={female} className="genderpics" alt="female" usemap="bodycoordinates" />
      <map name="bodycoordinates">
      //front
      <area shape="rect" coords="0,0,82,126" alt="headfront" />
      </map>
     </div>
    );
  }
}
