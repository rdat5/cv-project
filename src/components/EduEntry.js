import React, { Component } from 'react';

class EduEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.entryData.id,
            schoolNameInput: this.props.entryData.schoolNameInput,
            studyInput: this.props.entryData.studyInput,
            studyDateInput: this.props.entryData.studyDateInput
        };

        this.removeEntry = this.removeEntry.bind(this);
        this.entryUpdate = this.entryUpdate.bind(this);
    }

    removeEntry(e) {
        e.preventDefault();
        this.props.removeEntryFn(this.state.id);
    }

    entryUpdate(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value}, () => {
            this.props.eduInputFn(this.state);
        });
    }

    render() {
        return(
            <fieldset>
                <legend>Education Entry</legend>
                <label htmlFor="schoolNameInput">School Name:</label>
                <input
                    type="text"
                    id="schoolNameInput"
                    name="schoolNameInput"
                    value={this.state.schoolNameInput}
                    onChange={this.entryUpdate}/>
                <br></br>
                <br></br>
                <label htmlFor="studyInput">Study:</label>
                <input
                    type="text"
                    id="studyInput"
                    name="studyInput"
                    value={this.state.studyInput}
                    onChange={this.entryUpdate}/>
                <br></br>
                <br></br>
                <label htmlFor="studyDateInput">Date of Study:</label>
                <input
                    type="text"
                    id="studyDateInput"
                    name="studyDateInput"
                    value={this.state.studyDateInput}
                    onChange={this.entryUpdate}/>
                <br></br>
                <button onClick={this.removeEntry}>- Remove Entry</button>
            </fieldset>
        );
    }
}

export default EduEntry;