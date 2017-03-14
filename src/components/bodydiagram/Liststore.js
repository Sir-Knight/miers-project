import React from 'react';


export default class Liststore extends React.Component {
  constructor(props){
    super(props)
    this.state={
      done: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(){
    this.setState({
      done: !this.state.done
    })
  }
  
  render() {
    let {text} = this.props

    return (
      <div>
      <input type="checkbox"
      value={this.state.done}
      onClick={this.toggle}
      />
      {this.state.done ? "Acknowledge: "+text : text}
      </div>
    );
  }
}
