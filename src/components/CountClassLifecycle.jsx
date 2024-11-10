import React, { Component } from 'react'

export default class CountClassLifecycle extends Component {

    constructor(){
        super();
        console.log("constructor");
        this.state = {
            count: 1
        }
    }

    componentDidMount() {
        // one time call when component render on page 
        // register events for element, 
        // fetch data from server on first load
        console.log("componentDidMount");
        // 2. read value from local storage
        const countValue = localStorage.getItem("count");
        // 3. check if countValue not null 
        if(countValue){
            this.setState({
                // localStorage.getItem returns string only 
                count: parseInt(countValue)
            })
        }
    }

    componentDidUpdate(){
        // multiple times get call whenever state updated
        // re-fetching data from server  
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        // when component removed from page 
        // clean code like un-register some events 
        console.log("componentWillUnmount");
        // 1. store state value to localstorage
        localStorage.setItem("count",this.state.count);
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    console.log("render");
    return (
      <div style={{ backgroundColor: 'yellow'}}>
        <h2>Count Class Lifecycle Demo</h2>
        <h3>Count : {this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
