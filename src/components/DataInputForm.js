import React, { Component } from 'react';
import GeneralInfoInput from './GeneralInfoInput';
import EduInputForm from './EduInputForm';
import PracInputForm from './PracInputForm';

class DataInputForm extends Component {
    render() {
        return (
            <div className='data-input-form'>
                <GeneralInfoInput/>
                <EduInputForm/>
                <PracInputForm/>
            </div>
        );
    }
}

export default DataInputForm;