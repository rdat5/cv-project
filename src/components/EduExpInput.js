import React, { Component } from 'react';
import EduEntry from './EduEntry';

class EduExpInput extends Component {
    constructor(props) {
        super(props);

        this.onAddEntry = this.onAddEntry.bind(this);
        this.entryInputChange = this.entryInputChange.bind(this);
    }

    onAddEntry(e) {
        e.preventDefault();
        this.props.eduEntryFn();
    }

    entryInputChange(newEntry) {
        const ude = this.props.userData.userEdu;
        let newEduList = [];
        // Build new list

        ude.forEach(element => {
            if (element.id === newEntry.id) {
                newEduList.push(newEntry);
            }
            else {
                newEduList.push(element);
            }
        });

        this.props.inputHandler('userEdu', newEduList);
    }

    render() {
        const ud = this.props.userData;

        let entryList = ud.userEdu.map(entry => <li key={entry.id}><EduEntry entryData={entry} eduInputFn={this.entryInputChange}/></li>)

        return(
            <fieldset>
                <legend>Educational Experience</legend>
                <ul>
                    {entryList}
                </ul>
                <button onClick={this.onAddEntry}>+ Add Entry</button>
            </fieldset>
        );
    }
}

export default EduExpInput;