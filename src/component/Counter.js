import React, { Component } from 'react';
import { INCREMENT } from '../common/constant';
import { DECREMENT } from '../common/constant';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);

        this.state = {
            number: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.number < this.state.number){
            this.props.calculateSum(INCREMENT);
        }
        if (prevState.number > this.state.number){
            this.props.calculateSum(DECREMENT);
        }
      }

    onIncrease() {
        this.setState((prevState) => ({
            number: prevState.number + 1
        })
        )
    }

    onDecrease() {
        this.setState((prevState) => ({
            number: prevState.number - 1
        })
        )
    }


    render() {
        return (
            <div>
                <button onClick={this.onIncrease}>+</button>
                <span>{this.state.number}</span>
                <button onClick={this.onDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;