import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date(), paused: false }
    }

    componentDidMount() {
        this.id = setInterval(() => {
            if (this.state.paused)
                return;

            this.setState((state) => ({ date: new Date() }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
