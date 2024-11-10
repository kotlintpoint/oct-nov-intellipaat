import React, { Component } from 'react'

export default class ClockClass extends Component {
    constructor(){
        super();
        this.state = {
            currentTime: new Date()
        }
    }

    componentDidMount(){
        this.intervalId = setInterval(() => {
            console.log("interval");
            this.setState({
                currentTime: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }


  render() {
    return (
      <div>
        <h2>Clock Class Demo</h2>
        <h3>
            Time - {this.state.currentTime.toLocaleTimeString()}
        </h3>
      </div>
    )
  }
}
