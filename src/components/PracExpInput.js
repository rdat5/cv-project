import React, { Component } from 'react';

class PracExpInput extends Component {
    render() {
        return(
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
                    <button>+ Add Entry</button>
                </fieldset>
            </fieldset>
        );
    }
}

export default PracExpInput;