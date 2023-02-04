import React, { Component } from 'react';
import EduExpInput from './EduExpInput';
import GenInfoInput from './GenInfoInput';
import PracExpInput from './PracExpInput';

class DataInputForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.toggleEditingFn(false);
    }

    render() {
        return (
            <div className='data-input-form'>
                <form>
                    <GenInfoInput userData={this.props.userData} inputHandler={this.props.inputHandler}/>
                    <EduExpInput userData={this.props.userData} inputHandler={this.props.inputHandler}/>
                    <PracExpInput userData={this.props.userData} inputHandler={this.props.inputHandler}/>
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DataInputForm;