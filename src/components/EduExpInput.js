import React, { Component } from 'react';
import EduEntry from './EduEntry';
import uniqid from 'uniqid';

class EduExpInput extends Component {
    constructor(props) {
        super(props);

        this.addEduEntry = this.addEduEntry.bind(this);
        this.removeEduEntry = this.removeEduEntry.bind(this);
        this.entryInputChange = this.entryInputChange.bind(this);
    }

    removeEduEntry(id) {
        const { userEdu } = this.props.userData;
        let newEduList = [];

        userEdu.forEach(element => {
            if (element.id !== id) {
                newEduList.push(element);
            }
        });

        this.props.inputHandler('userEdu', newEduList);
    }

    addEduEntry(e) {
        e.preventDefault();

        let newEntry = {
            id: uniqid(),
            schoolNameInput: '',
            studyInput: '',
            studyDateInput: ''
        };

        let newList = this.props.userData.userEdu.concat(newEntry);
        this.props.inputHandler('userEdu', newList);
    }

    entryInputChange(newEntry) {
        const { userEdu } = this.props.userData;
        
        let newEduList = [];

        userEdu.forEach(element => {
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
        const { userData } = this.props;

        let entryList = userData.userEdu.map(entry => <li key={entry.id}><EduEntry entryData={entry} eduInputFn={this.entryInputChange} removeEntryFn={this.removeEduEntry}/></li>)

        return(
            <fieldset>
                <legend>Educational Experience</legend>
                <ul>
                    {entryList}
                </ul>
                <button onClick={this.addEduEntry}>+ Add Entry</button>
            </fieldset>
        );
    }
}

export default EduExpInput;