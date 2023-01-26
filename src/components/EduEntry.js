import React, { Component } from 'react';

class EduEntry extends Component {
    render() {
        return(
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
            </fieldset>
        );
    }
}

export default EduEntry;