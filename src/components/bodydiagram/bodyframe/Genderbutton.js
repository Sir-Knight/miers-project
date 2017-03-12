import React from 'react';
import './Genderbutton.css';



var Genderbutton = React.createClass({
  getInitialState: function() {
    return {
      bgColor: 'red'
    }

  },

  handleClick: function() {
    this.setState({
      bgColor: 'blue'
    })
  },

  render : function() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{backgroundColor:this.state.bgColor}}>Button</button>
      </div>
    )
  }
});



/*var Bodyframe = React.createClass({
    getInitialState : function() {
       return { showMe : false };
    },
    onClick : function() {
       this.setState({ showMe : true} );
    },
    render : function() {
        if(this.state.showMe) {
            return (<div> one div </div>);
        } else {
            return (<a onClick={this.onClick}> press me </a>);
        }
    }
})
*/

export default Genderbutton;
