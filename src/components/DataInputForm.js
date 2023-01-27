import React, { Component } from 'react';
import EduExpInput from './EduExpInput';
import GenInfoInput from './GenInfoInput';
import PracExpInput from './PracExpInput';

class DataInputForm extends Component {
    render() {
        return (
            <div className='data-input-form'>
                <form>
                    <GenInfoInput userData={this.props.userData} inputHandler={this.props.inputHandler}/>
                    <EduExpInput userData={this.props.userData}/>
                    <PracExpInput/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default DataInputForm;