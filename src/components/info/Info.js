import React from 'react';
import './Info.css';




export default class Info extends React.Component{
  render(){

    return(
      <div className="Info">
        <div className='info_parent_div_1'>
          <div className='info_child_div_1'>
            asd
          </div>
        </div>
        <div className='info_parent_div_2'>
          <div className='info_child_div_2'>
            asd
          </div>
          <div className='info_child_div_3'>
            asd
          </div>
        </div>
      </div>
    );
  }
}
