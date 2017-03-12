import React from 'react';
import './Clock.css';

var Clock = React.createClass({
  getInitialState: function(){
    return {date:  (new Date()).toLocaleTimeString()};
  },
  componentDidMount: function() {
    this.timerId = setInterval(this.update_time, 1000);
  },
  update_time: function() {
    this.setState({date: (new Date()).toLocaleTimeString()});
  },
  render: function() {
    return (
      <div className="Clock">{this.state.date}</div>
    );
  },
  componentWillUnmount: function() {
    clearInterval(this.timerId);
  },
});

export default Clock;
