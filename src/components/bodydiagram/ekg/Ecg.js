import React from 'react';
import {  Sparklines, SparklinesLine, SparklinesSpots  } from 'react-sparklines';

export default class Ecg extends React.Component{
  render(){
    return(
      <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
          <SparklinesLine style={{ fill: "none" }} />
          <SparklinesSpots />
      </Sparklines>
    );
  }
}
