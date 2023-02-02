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
        this.entryUpdate = this.entryUpdate.bind(this);
    }

    removePracEntry(e) {
        e.preventDefault();
        this.props.removeEntryFn(this.state.id);
    }

    entryUpdate(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value}, () => {
            this.props.pracInputFn(this.state);
        });
    }

    render() {
        return(
            <fieldset>
                <legend>Practical Experience Entry</legend>
                <label htmlFor="companyNameInput">Company Name:</label>
                <input
                    type="text"
                    id="companyNameInput"
                    name="companyNameInput"
                    value={this.state.companyNameInput}
                    onChange={this.entryUpdate}/>
                <br></br>
                <br></br>
                <label htmlFor="positionInput">Position Title:</label>
                <input
                    type="text"
                    id="positionInput"
                    name="positionInput"
                    value={this.state.positionInput}
                    onChange={this.entryUpdate}/>
                <br></br>
                <br></br>
                <label htmlFor="mainTaskInput">Main Tasks:</label>
                <input
                    type="text"
                    id="mainTaskInput"
                    name="mainTaskInput"
                    value={this.state.mainTaskInput}
                    onChange={this.entryUpdate}/>
                <br></br>
                <br></br>
                <label htmlFor="workedFromInput">Worked from:</label>
                <input
                    type="text"
                    id="workedFromInput"
                    name="workedFromInput"
                    value={this.state.workedFromInput}
                    onChange={this.entryUpdate}/>
                <br></br>
                <label htmlFor="workedToInput">Worked to:</label>
                <input
                    type="text"
                    id="workedToInput"
                    name="workedToInput"
                    value={this.state.workedToInput}
                    onChange={this.entryUpdate}/>
                <br></br>
                <button onClick={this.removePracEntry}>- Remove Entry</button>
            </fieldset>
        );
    }
}

export default PracEntry;