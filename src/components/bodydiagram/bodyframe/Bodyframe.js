import React from 'react';
import TabPanel from 'react-tab-panel';
import './Bodyframe.css';
import Male from './Male';
import Female from './Female'

const tabStyle = (props) => {
  const baseStyle = {
    padding: 10
  }

  return Object.assign(
    baseStyle,
    props.active?
      { color: 'rgba(204, 204, 51, 0.8)' }:
      { background: 'gray' }
  )
}

export default class Bodyframe extends React.Component{
  constructor(props) {
    super(props);

  }
  render(){

    return(
      <div className="Bodyframe-wrap">
        <TabPanel
          tabAlign="start"
          tabPosition="left"
          vertical="true"
          transition="true"
           tabStyle={tabStyle}
          //try "stretch", "space-between", "start", "end"
        >
          <div tabTitle="MALE">
          <Male onAddList={this.props.addList}/>
          </div>
          <div tabTitle="FEMALE">
          <Female onAddList={this.props.addList}/>
          </div>

        </TabPanel>
       </div>
    );
  }
}
