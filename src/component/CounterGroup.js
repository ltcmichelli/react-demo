import React, { Component } from 'react';
import Counter from './Counter';
import { INITIAL_COUNTER_NUMBER } from '../common/constant';


class CounterGroup extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            counterSize: INITIAL_COUNTER_NUMBER,
            sum: 0
        }

    }

    initArray(size) {
        return Array.from(Array(size).keys());
    }

    onChange(event) {
        let value = event.target.value;
        this.setState({
            counterSize: value.length > 0 ? parseInt(value) : 0
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
                    <Counter key={value} calculateSum={this.onCalculate.bind(this)} />
                ))}
            </div>
        );
    }
}

CounterGroup.propTypes = {

};

export default CounterGroup;