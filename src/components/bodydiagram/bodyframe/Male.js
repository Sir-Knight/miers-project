import React from 'react';
import './Gender.css';
import male from './male-10.jpg';

export default class Male extends React.Component{
  render(){
    return(

      <div className="gendermap">
      <img src={male} className="genderpics" alt="male" usemap="#bodycoordinates" />
      <map name="bodycoordinates">
      <area shape="rect" coords="90,0,82,126" alt="headfront"  href=""/>
      </map>
     </div>
    );
  }
}
