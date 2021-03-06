import React, { Component } from 'react'

export default class Ccomponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState(state => ({
      cout: state.count ++
    }));
  }

  decrement() {
    this.setState(state => ({
      cout: state.count - 1
    }));
  }

  reset() {
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <div>
        <h1>New znachenie {this.state.count} </h1>
        <button onClick={this.increment}>Click</button>
        <button onClick={this.decrement}>Click</button>
        <button onClick={this.reset}>Click</button>
      </div>
    );
  }
}

