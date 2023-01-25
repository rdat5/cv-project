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
            userEdu: [
                {
                    id: uniqid(),
                    schoolNameInput: 'test name',
                    studyInput: 'test study',
                    studyDateInput: 'test date'
                },
                {
                    id: uniqid(),
                    schoolNameInput: 'test name 2',
                    studyInput: 'test study 2',
                    studyDateInput: 'test date 2'
                }
            ],
            userPrac: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <main className='page-main'>
                <DataInputForm userData={this.state} inputHandler={this.handleInputChange}/>
                <CVResult userData={this.state}/>
            </main>
        );
    }
}

export default Main;