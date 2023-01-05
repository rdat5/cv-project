import React, { Component } from 'react';
import GeneralInfoInput from './GeneralInfoInput';
import EduInputForm from './EduInputForm';

class DataInputForm extends Component {
    render() {
        return (
            <div>
                <GeneralInfoInput/>
                <EduInputForm/>
            </div>
        );
    }
}

export default DataInputForm;