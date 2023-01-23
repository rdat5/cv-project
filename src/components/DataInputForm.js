import React, { Component } from 'react';
import EduExpInput from './EduExpInput';
import GenInfoInput from './GenInfoInput';
import PracExpInput from './PracExpInput';

class DataInputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: '',
            emailInput: '',
            phoneInput: '',
            eduInput: [],
            pracInput: []
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const state = this.state;
        this.props.submitFn(state.nameInput, state.emailInput, state.phoneInput);
    }

    render() {
        return (
            <div className='data-input-form'>
                <form>
                    <GenInfoInput/>
                    <EduExpInput/>
                    <PracExpInput/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DataInputForm;