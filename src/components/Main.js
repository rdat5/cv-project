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
            userPrac: [],
            isEditing: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleIsEditing = this.toggleIsEditing.bind(this);
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    toggleIsEditing(value) {
        this.setState({
            isEditing: value
        });
    }

    render() {
        let currentScene;

        if (this.state.isEditing) {
            currentScene = <DataInputForm userData={this.state} inputHandler={this.handleInputChange} eduEntryFn={this.addEduEntry} toggleEditingFn={this.toggleIsEditing}/>
        }
        else {
            currentScene = <CVResult userData={this.state} toggleEditingFn={this.toggleIsEditing}/>
        }

        return (
            <main className='page-main'>
                {currentScene};
            </main>
        );
    }
}

export default Main;