import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        /* TODO (Counter): Use setState() to modify the count. Here’s an example:
            this.setState({
                keyToChange: valueToChangeTo
            });
        */
        this.setState({
            count: this.state.count + 1
        });

    }

    render() {
        return (
            <div className="counter">
                <h2>Count: {this.state.count}</h2>

                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default Counter;