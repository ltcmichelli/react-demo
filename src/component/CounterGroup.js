import React, { Component } from 'react';
import Counter from './Counter';
import {INITIAL_COUNTER_NUMBER} from '../common/constant';


class CounterGroup extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            counterSize: INITIAL_COUNTER_NUMBER
        }

    }

    initArray(size){
        return Array.from(Array(size).keys());
    }

    onChange(event){
        let value = event.target.value;
        this.setState({
            counterSize: value.length > 0 ? parseInt(value) : 0
        })
    }

    render() {
        let counterList = this.initArray(this.state.counterSize);
        return (
            <div>
                <form>
                    <input onChange = {this.onChange} type = "text" value = {this.state.counterSize}></input>
                </form>
                {counterList.map((value) =>(
                    <Counter key = {value}/>
                ))}
                
            </div>
        );
    }
}

CounterGroup.propTypes = {

};

export default CounterGroup;