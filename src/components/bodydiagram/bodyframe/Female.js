import React from 'react';
import './Gender.css';
import female from './female-08.jpg';


export default class Female extends React.Component{
  render(){
    return(

      <div className="gendermap">
      <img src={female} className="genderpics" alt="female" useMap="#bodycoordinates" />
      <map name="bodycoordinates">
      <area shape="circle" coords="100,70,35" alt="headfront" href="#"/>
      <area shape="circle" coords="270,70,35" alt="headback" href="#"/>
      <area shape="circle" coords="180,150,37" alt="ShouldersMerge" href="#"/>
      <area shape="circle" coords="20,150,37" alt="ShouldersFront" href="#"/>
      <area shape="circle" coords="350,150,37" alt="ShouldersBack" href="#"/>
      <area shape="circle" coords="180,285,43" alt="armHandsMerge" href="#"/>
      <area shape="circle" coords="20,285,37" alt="armHandsFront" href="#"/>
      <area shape="circle" coords="350,285,37" alt="armHandsBack" href="#"/>
      <area shape="circle" coords="100,150,35" alt="chest" href="#"/>
      <area shape="circle" coords="268,150,35" alt="back" href="#"/>
      <area shape="circle" coords="100,270,35" alt="waistAreaFront" href="#"/>
      <area shape="circle" coords="268,270,35" alt="waistAreaBack" href="#"/>
      <area shape="circle" coords="100,400,70" alt="legsFront" href="#"/>
      <area shape="circle" coords="268,400,70" alt="legsBack" href="#"/>
      <area shape="circle" coords="90,520,45" alt="feetFront" href="#"/>
      <area shape="circle" coords="268,520,45" alt="feetBack" href="#"/>
      </map>
     </div>
    );
  }
}
