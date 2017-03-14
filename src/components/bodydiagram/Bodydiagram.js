import React from 'react';
import './Bodydiagram.css';
import Bodyframe from './bodyframe/Bodyframe';
import Ekg from './ekg/Ekg';



export default class Bodydiagram extends React.Component{
  render(){
    return(
      <div className="Bodydiagram">
<div className='parent_div_1'>
<div className='child_div_1'>
<Bodyframe />
</div>

</div>
<div className='parent_div_2'>
<div className='child_div_2'>
</div>
<div className='child_div_3'>
<Ekg />
</div>
</div>
      </div>
    );
  }
}
