import React, { Component } from 'react';
import Counter from './Counter';


class CounterGroup extends Component {
    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

CounterGroup.propTypes = {

};

export default CounterGroup;