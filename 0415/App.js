//ppt06-38
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({date:new Date()}),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  /*tick(){
    this.setState({date:new Date()});
  }*/
  //新的時間透過setState丟上去

  render() {
    return (
      <div>
        <h1>Hello, world!(This is Class component)</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
