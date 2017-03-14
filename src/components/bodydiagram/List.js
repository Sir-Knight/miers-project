import React from 'react';
import './List.css';


export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.addSubmit = this.addSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
 addSubmit(){
   let {onAddList} = this.props
   onAddList(this.state.value)
   this.setState({
     value: ""
   })
 }

  render() {
    let {value} = this.state
    return (
      <div className="Liststyle">
      <form onSubmit={this.addSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

        <input type="submit" value="Submit" />

      </form>
      </div>
    );
  }
}
