import React from 'react';
import './Bodydiagram.css';
import Bodyframe from './bodyframe/Bodyframe';
import Ekg from './ekg/Ekg';
import Shownlist from './Shownlist';
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
  removeList(items) {
    this.listStore.splice(items, 1);
     this.setState({listStore: this.listStore});
  }

  render(){
    let {listStore} = this.state
      console.log(this.addList)
      console.log(this.removeList)
    return(
      <div className="Bodydiagram">
        <div className='parent_div_1'>
          <div className='child_div_1'>
            <Bodyframe  addList={this.addList}/>
          </div>

        </div>
        <div className='parent_div_2'>
          <div className='child_div_2'>

          <div className='showTitle'>
           INJURIES SELECTED
          </div>
            <div className='showlist'>
            <Shownlist items={listStore} removeList={this.removeList}/>
            </div>
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
