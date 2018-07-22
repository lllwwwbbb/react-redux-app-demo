import React, { Component } from 'react';
import  PropTypes from 'prop-types';
import {Provider} from "react-redux";
import CounterContainer from "./Counter/CounterContainer";
import FormContainer from "./Form/FormContainer";
import {WrappedDynamicFieldSet} from "./antdExample/Form";
import {MyCheckbox} from "./antdExample/Checkbox";
import {MyRadio} from "./antdExample/Radio";
import ConsignView from "./antdExample/ConsignForm";

class App extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <WrappedDynamicFieldSet/>
                </div>
            </Provider>
        )
    }
}

export default App;
