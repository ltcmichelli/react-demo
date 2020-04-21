import React, { Component } from 'react';
import { INCREMENT } from '../common/constant';
import { DECREMENT } from '../common/constant';
import { INITIAL_VALUE } from '../common/constant';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);

        this.state = {
            number: INITIAL_VALUE
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("prevState.number" + prevState.number);
        console.log("this.state.number" + this.state.number);
        if (prevProps.counterNumber !== this.props.counterNumber){
            this.setState({
                number: INITIAL_VALUE
            })
        }
        if (prevState.number < this.state.number){
            console.log("++");
            this.props.calculateSum(INCREMENT);
        }
        if (prevState.number > this.state.number){
            console.log("--");
            this.props.calculateSum(DECREMENT);
        }
      }

    onIncrease() {
        this.setState((prevState) => ({
            number: prevState.number + INCREMENT
        })
        )
    }

    onDecrease() {
        this.setState((prevState) => ({
            number: prevState.number + DECREMENT
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