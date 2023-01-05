import React, { Component } from 'react';
import GeneralInfoInput from './GeneralInfoInput';
import EduInputForm from './EduInputForm';
import PracInputForm from './PracInputForm';

class DataInputForm extends Component {
    render() {
        return (
            <div>
                <GeneralInfoInput/>
                <EduInputForm/>
                <PracInputForm/>
            </div>
        );
    }
}

export default DataInputForm;