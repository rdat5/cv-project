import React, { Component } from 'react';
import DataInputForm from './DataInputForm';
import CVResult from './CVResult';
import uniqid from 'uniqid';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: '',
            emailInput: '',
            phoneInput: '',
            userEdu: [],
            userPrac: []
        };

        this.addEduEntry = this.addEduEntry.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addEduEntry() {
        let newEntry = {
            id: uniqid(),
            schoolNameInput: '',
            studyInput: '',
            studyDateInput: ''
        };

        let newList = this.state.userEdu.concat(newEntry);
        this.setState({userEdu: newList});
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <main className='page-main'>
                <DataInputForm userData={this.state} inputHandler={this.handleInputChange} eduEntryFn={this.addEduEntry}/>
                <CVResult userData={this.state}/>
            </main>
        );
    }
}

export default Main;