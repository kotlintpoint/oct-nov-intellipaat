import React, { Component } from 'react'

export default class PersonStateClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    handleChange = () => {
        // console.log("handle change")
        // to change state value always use setState method in class component 
        // when state updated component re-render
        this.setState({
            count: this.state.count + 1
        })
    }

    handleChangeFiveTimes = () => {
      for(let i=1; i<=5; i++){
        // this.setState({
        //     count: this.state.count + 1
        // })
        
        // asynchronous state update 
        this.setState((prevState) => {
          return {
            count: prevState.count + 1
          }
        })
      }
    }

  render() {
    return (
      <div style={{ backgroundColor: 'greenyellow'}}>
        <h2>Person Class State Demo</h2>
        <h3>Count : {this.state.count}</h3>
        <button onClick={this.handleChange}>Change Count</button>
        <button onClick={this.handleChangeFiveTimes}>Change 5 times</button>
      </div>
    )
  }
}
