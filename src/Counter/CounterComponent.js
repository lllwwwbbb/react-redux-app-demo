import React ,{Component} from 'react';
import FormContainer from "../Form/FormContainer";

export class CounterComponent extends Component {
    render() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        );
    }
}