import React from 'react';
import './List.css';


export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Head Ache'};

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
            <option value="headache">Head Ache</option>
            <option value="headcrack">Head Crack</option>
            <option value="shoulderdislocated">Shoulder Dislocated</option>
            <option value="brokenarm">Broken Arm</option>
            <option value="cardiacarrest">Cardiac Arrest</option>
            <option value="brokenribs">Broken Ribs</option>
            <option value="fracturedhand">Fractured Hand</option>
            <option value="fracturedfoot">Fractured Foot</option>
            <option value="fracturedspine">Fractured Spine</option>
              <option value="brokenback">Broken Back</option>
                <option value="etc">etc</option>

          </select>

        <input type="submit" value="Submit" />

      </form>
      </div>
    );
  }
}
