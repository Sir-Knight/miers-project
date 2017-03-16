import React from 'react';
import Liststore from './Liststore';


export default class Shownlist extends React.Component {

  render() {
     let {items} = this.props
     console.log(this.props.removeList)
    return (
      <div>
      <ul>
      {
        items.map(show => <li key={show.id}><Liststore text={show} /> <button onClick={this.props.removeList}>REMOVE</button></li>)
      }
      </ul>
      </div>
    );
  }
}
