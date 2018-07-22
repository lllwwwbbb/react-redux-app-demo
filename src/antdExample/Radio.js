import { Radio } from 'antd';
import React from "react";
const RadioGroup = Radio.Group;

export class MyRadio extends React.Component {
    state = {
        value: 'A',
    };
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={'A'}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </RadioGroup>
        );
    }
}
