import React, { Component } from 'react';

class PracEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.entryData.id,
            companyNameInput: this.props.entryData.companyNameInput,
            positionInput: this.props.entryData.positionInput,
            mainTaskInput: this.props.entryData.mainTaskInput,
            workedFromInput: this.props.entryData.workedFromInput,
            workedToInput: this.props.entryData.workedToInput
        };

        this.removePracEntry = this.removePracEntry.bind(this);
    }

    removePracEntry(e) {
        e.preventDefault();
        // console.log('removing');
        this.props.removeEntryFn(this.state.id);
    }

    render() {
        return(
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
                <button onClick={this.removePracEntry}>- Remove Entry</button>
            </fieldset>
        );
    }
}

export default PracEntry;