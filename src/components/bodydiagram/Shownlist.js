import React from 'react';
import Liststore from './Liststore';
import './List.css';


export default class Shownlist extends React.Component {

  render() {
     let {items} = this.props
     console.log(this.props.removeList)
    return (
      <div>
      <ul>
      {
        items.map((show, showIndex) => <li key={showIndex}><Liststore text={show} /> <button className="removeButton" value={showIndex} onClick={this.props.removeList}>REMOVE</button></li>)
      }
      </ul>
      </div>
    );
  }
}
