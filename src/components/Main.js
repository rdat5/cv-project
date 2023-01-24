import React, { Component } from 'react';
import DataInputForm from './DataInputForm';
import CVResult from './CVResult';

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

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

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