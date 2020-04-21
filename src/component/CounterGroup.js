import React, { Component } from 'react';
import Counter from './Counter';
import { INITIAL_COUNTER_NUMBER } from '../common/constant';
import { INITIAL_VALUE } from '../common/constant';

class CounterGroup extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onCalculate = this.onCalculate.bind(this);

        this.state = {
            counterSize: INITIAL_COUNTER_NUMBER,
            sum: INITIAL_VALUE
        }

    }

    initArray(size) {
        return Array.from(Array(size).keys());
    }

    onChange(event) {
        let value = event.target.value;
        this.setState({
            counterSize: value.length > 0 ? parseInt(value) : 0,
            sum: INITIAL_VALUE
        })
    }

    onCalculate(value) {
        this.setState((prevState) => {
            return {
                sum: prevState.sum + value
            }
        })
    }

    render() {
        let counterList = this.initArray(this.state.counterSize);
        return (
            <div>
                Generate
                <form>
                    <input onChange={this.onChange} type="text" value={this.state.counterSize}></input>
                </form>
                    Counters
                <p>sum of all counters value is {this.state.sum}</p>
                {counterList.map((value) => (
                    <Counter key={value} counterNumber={this.state.counterSize} calculateSum={this.onCalculate} />
                ))}
            </div>
        );
    }
}

CounterGroup.propTypes = {

};

export default CounterGroup;