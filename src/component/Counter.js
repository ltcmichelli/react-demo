import React, { Component } from 'react';
import { INCREMENT } from '../common/constant';
import { DECREMENT } from '../common/constant';
import { INITIAL_VALUE } from '../common/constant';
import { Button, Row, Col, Space } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';


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
        if (prevProps.counterNumber !== this.props.counterNumber) {
            this.setState({
                number: INITIAL_VALUE
            })
        }
    }

    onIncrease() {
        this.setState((prevState) => ({
            number: prevState.number + INCREMENT
        }),
            this.props.calculateSum(INCREMENT)
        )
    }

    onDecrease() {
        this.setState((prevState) => ({
            number: prevState.number + DECREMENT
        }),
            this.props.calculateSum(DECREMENT)
        )
    }


    render() {
        return (
            <Space>
                <Row>
                    <Col span={12}>
                        <Button shape="circle" icon={<ArrowUpOutlined />} onClick={this.onIncrease} />
                        <span>{this.state.number}</span>
                        <Button shape="circle" icon={<ArrowDownOutlined />} onClick={this.onDecrease}/>
                    </Col>
                </Row>
            </Space>
        );
    }
}

export default Counter;