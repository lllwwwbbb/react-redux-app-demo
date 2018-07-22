import { Checkbox } from 'antd';
import React from "react";
const CheckboxGroup = Checkbox.Group;

export class MyCheckbox extends React.Component {

    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    plainOptions = ['Apple', 'Pear', 'Orange'];
    options = [
        {label: 'Apple', value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange'},
    ];
    optionsWithDisabled = [
        {label: 'Apple', value: 'Apple'},
        {label: 'Pear', value: 'Pear'},
        {label: 'Orange', value: 'Orange', disabled: false},
    ];

    render() {
        return (
            <div>
                <CheckboxGroup options={this.plainOptions} defaultValue={['Apple']} onChange={this.onChange}/>
                <br/><br/>
                <CheckboxGroup options={this.options} defaultValue={['Pear']} onChange={this.onChange}/>
                <br/><br/>
                <CheckboxGroup options={this.optionsWithDisabled} disabled defaultValue={['Apple']}
                               onChange={this.onChange}/>
            </div>
        )
    }
}