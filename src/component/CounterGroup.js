import React, { Component } from 'react';
import Counter from './Counter';
import { INITIAL_COUNTER_NUMBER } from '../common/constant';
import { INITIAL_VALUE } from '../common/constant';
import CounterApi from '../apis/CounterApi';
import { Input, Card, Typography } from 'antd';
const { Text } = Typography;

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

    componentDidMount() {
        CounterApi.getCounterSize().then((response) => {
            console.log(response.data);
            let size = response.data.size;
            this.setState({
                counterSize: size
            })
        })
    }

    initArray(size) {
        return Array.from(Array(size).keys());
    }

    onChange(event) {
        // let value = event.target.value;
        CounterApi.putCounterSize().then((response) => {
            console.log(response.data);
            let size = response.data.size;
            this.setState({
                counterSize: size,
                sum: INITIAL_VALUE
            })
        })
        // this.setState({
        //     counterSize: value.length > 0 ? parseInt(value) : 0,
        //     sum: INITIAL_VALUE
        // })
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
            <Card>
                Generate
                <Input placeholder="Input number" onChange={this.onChange} type="text" value={this.state.counterSize} />
                    Counters
                <br />
                <p>sum of all counters value is {this.state.sum}</p>
                {counterList.map((value) => (
                    <Counter key={value} counterNumber={this.state.counterSize} calculateSum={this.onCalculate} />
                ))}
            </Card>
        );
    }
}

CounterGroup.propTypes = {

};

export default CounterGroup;