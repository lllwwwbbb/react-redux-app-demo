import {CounterComponent} from "./CounterComponent";
import {increaseAction} from "./CounterReducer";
import {connect} from "react-redux";
import React, {Component} from 'react';

class CounterContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    onIncrease = () => {
        this.setState({
            count: this.state.count + 10,
        })
    };

    render() {
        return <CounterComponent
            value={this.state.count}
            onIncreaseClick={this.onIncrease}
        />
    };
}

export default CounterContainer;
//
// const mapStateToProps = (state) => {
//     return {
//         value : state.counter,
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onIncreaseClick: () => dispatch(increaseAction),
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CounterContainer);