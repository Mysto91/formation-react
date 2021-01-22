import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleIncrement = (event) => {
        this.setState((state) => ({ counter: this.state.counter + 1 }));
    }

    handleDecrement = (event) => {
        this.setState((state) => ({ counter: this.state.counter - 1 }));
    }

    handleReset = (event) => {
        this.setState((state) => ({ counter: 0 }));
    }

    render() {
        return (
            <div>
                <h1>Compteur</h1>
                <div>{this.state.counter}</div>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        )
    }
}
