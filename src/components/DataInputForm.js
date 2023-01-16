import React, { Component } from 'react';
import EduInputEntry from './EduInputEntry';

class DataInputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: '',
            emailInput: '',
            phoneInput: '',
            EduInput: [],
            PracInput: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addEduEntry = this.addEduEntry.bind(this);
    }

    addEduEntry(e) {
        e.preventDefault();
        console.log('add education');
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const state = this.state;
        this.props.submitFn(state.nameInput, state.emailInput, state.phoneInput);
    }

    render() {
        return (
            <div className='data-input-form'>
                <form>
                    <fieldset>
                        <legend>General Information</legend>
                        <label htmlFor="nameInput">Name:</label>
                        <input 
                            type="text" 
                            id="nameInput" 
                            name="nameInput"
                            value={this.state.nameInput}
                            onChange={this.handleInputChange}/>
                        <br></br>
                        <br></br>
                        <label htmlFor="emailInput">Email:</label>
                        <input 
                            type="text" 
                            id="emailInput" 
                            name="emailInput"
                            value={this.state.emailInput}
                            onChange={this.handleInputChange}/>
                        <br></br>
                        <br></br>
                        <label htmlFor="phoneInput">Phone:</label>
                        <input 
                            type="text" 
                            id="phoneInput" 
                            name="phoneInput"
                            value={this.state.phoneInput}
                            onChange={this.handleInputChange}/>
                    </fieldset>
                    <fieldset>
                        <legend>Educational Experience</legend>
                        <EduInputEntry/>
                        <button onClick={this.addEduEntry}>+ Add Entry</button>
                    </fieldset>
                    <fieldset>
                        <legend>Practical Experience</legend>
                        <button>+ Add Entry</button>
                    </fieldset>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DataInputForm;