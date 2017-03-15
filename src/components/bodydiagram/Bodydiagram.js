import React from 'react';
import './Bodydiagram.css';
import Bodyframe from './bodyframe/Bodyframe';
import Ekg from './ekg/Ekg';
import Shownlist from './Shownlist';
import List from './List';
import Thermo from './thermometer/Thermo';
import Blood from './blooddrip/Blood';



export default class Bodydiagram extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      listStore: []
    }
    this.addList = this.addList.bind(this)
  }

  addList(value) {
    this.setState({
      listStore: this.state.listStore.concat([value])
    })
  }
  removeList(index) {
    var newData = this.state.listStore.slice(); //copy array
    newData.splice(index, 1); //remove element
    this.setState({listStore: newData}); //update state
  }

  render(){
    let {listStore} = this.state
      console.log(this.addList)
    return(
      <div className="Bodydiagram">
        <div className='parent_div_1'>
          <div className='child_div_1'>
            <Bodyframe  addList={this.addList}/>
          </div>

        </div>
        <div className='parent_div_2'>
          <div className='child_div_2'>
            <Shownlist items={listStore}/>
          </div>
          <div className='child_div_3'>
            <Ekg />
          </div>
          <div className='child_div_4'>
            <div className='thermodiv'>
            <Thermo />
            </div>
            <div className='blooddrip'>
                 <div className='bloodpool'>
                <Blood />
                </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}
