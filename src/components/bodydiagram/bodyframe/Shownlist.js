import React from 'react';
import Liststore from './Liststore';
import './List.css';


export default class Shownlist extends React.Component {

  render() {
     let {items} = this.props
    return (
      <div className="listshown">
      <ul>
      {
        items.map(show => <li key={show.id}><Liststore text={show} /></li>)
      }
      </ul>
      </div>
    );
  }
}
