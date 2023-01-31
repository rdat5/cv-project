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
                <DataInputForm userData={this.state} inputHandler={this.handleInputChange} eduEntryFn={this.addEduEntry}/>
                <CVResult userData={this.state}/>
            </main>
        );
    }
}

export default Main;