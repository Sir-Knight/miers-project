import React from 'react';
import './Thermo.css';



export default class Thermo extends React.Component{

  /*var (fit, orvalue, value);

  setInterval(function() {
  	$(".num").each(function(i) {
  		orvalue = $(this).val();
  		value = orvalue /2 + 50;
  		fit = i + 1;
  		$(".tbg:nth-child(" + fit + ") .tvalue").html(orvalue);
  		$(".tbg:nth-child(" + fit + ") .red").css("bottom", value + "px");
  	});
  }, 100);*/

  render(){
    return(
      <div className="Thermo">
      <div id="inputarray">
    <input className="num" max="100" min="-100" type="number" value="0" />
  </div>
  <div id="tbgs">
    <div className="tbg">
      <div className="tvalue"></div>
      <div className="therm">
        <div className="tube">
          <div className="red"></div>
        </div>
        <div className="bulb"></div>
      </div>
    </div>
  </div>
  </div>
    );
  }
}
