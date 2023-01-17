import React, { Component } from 'react';

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
        this.addPracEntry = this.addPracEntry.bind(this);
    }

    addEduEntry(e) {
        e.preventDefault();
        console.log('add education');
    }

    addPracEntry(e) {
        e.preventDefault();
        console.log('add practical');
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
                        <fieldset>
                            <legend>Education Entry</legend>
                            <label htmlFor="schoolNameInput">School Name:</label>
                            <input
                                type="text"
                                id="schoolNameInput"
                                name="schoolNameInput"/>
                            <br></br>
                            <br></br>
                            <label htmlFor="studyInput">Study:</label>
                            <input
                                type="text"
                                id="studyInput"
                                name="studyInput"/>
                            <br></br>
                            <br></br>
                            <label htmlFor="studyDateInput">Date of Study:</label>
                            <input
                                type="text"
                                id="studyDateInput"
                                name="studyDateInput"/>
                            <br></br>
                            <br></br>
                            <button onClick={this.addEduEntry}>+ Add Entry</button>
                        </fieldset>
                    </fieldset>
                    <fieldset>
                        <legend>Practical Experience</legend>
                        <fieldset>
                            <legend>Practical Experience Entry</legend>
                            <label htmlFor="companyNameInput">Company Name:</label>
                            <input
                                type="text"
                                id="companyNameInput"
                                name="companyNameInput"/>
                            <br></br>
                            <br></br>
                            <label htmlFor="positionInput">Position Title:</label>
                            <input
                                type="text"
                                id="positionInput"
                                name="positionInput"/>
                            <br></br>
                            <br></br>
                            <label htmlFor="mainTaskInput">Main Tasks:</label>
                            <input
                                type="text"
                                id="mainTaskInput"
                                name="mainTaskInput"/>
                            <br></br>
                            <br></br>
                            <label htmlFor="workedFromInput">Worked from:</label>
                            <input
                                type="text"
                                id="workedFromInput"
                                name="workedFromInput"/>
                            <br></br>
                            <label htmlFor="workedToInput">Worked to:</label>
                            <input
                                type="text"
                                id="workedToInput"
                                name="workedToInput"/>
                            <br></br>
                            <br></br>
                            <button onClick={this.addPracEntry}>+ Add Entry</button>
                        </fieldset>
                    </fieldset>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DataInputForm;