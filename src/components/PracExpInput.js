import React, { Component } from 'react';
import PracEntry from './PracEntry';
import uniqid from 'uniqid';

class PracExpInput extends Component {
    constructor(props) {
        super(props);

        this.removePracEntry = this.removePracEntry.bind(this);
        this.addPracEntry = this.addPracEntry.bind(this);
        this.entryInputChange = this.entryInputChange.bind(this);
    }

    removePracEntry(id) {
        const upe = this.props.userData.userPrac;
        let newPracList = [];

        // Build new list
        upe.forEach(element => {
            if (element.id !== id) {
                newPracList.push(element);
            }
        });

        this.props.inputHandler('userPrac', newPracList);
    }

    addPracEntry(e) {
        e.preventDefault();
        console.log('add');
        let newEntry = {
            id: uniqid(),
            companyNameInput: '',
            positionInput: '',
            mainTaskInput: '',
            workedFromInput: '',
            workedToInput: ''
        };

        let newList = this.props.userData.userPrac.concat(newEntry);
        this.props.inputHandler('userPrac', newList);
    }
    
    entryInputChange(newEntry) {
        const upe = this.props.userData.userPrac;
        let newPracList = [];

        upe.forEach(element => {
            if (element.id === newEntry.id) {
                newPracList.push(newEntry);
            }
            else {
                newPracList.push(element);
            }
        });

        this.props.inputHandler('userPrac', newPracList);
    }

    render() {
        const ud = this.props.userData;

        let entryList = ud.userPrac.map(entry => <li key={entry.id}><PracEntry entryData={entry} pracInputFn={this.entryInputChange} removeEntryFn={this.removePracEntry}/></li>)

        return(
            <fieldset>
                <legend>Practical Experience</legend>
                <ul>
                    {entryList}
                </ul>
                <button onClick={this.addPracEntry}>+ Add Entry</button>
            </fieldset>
        );
    }
}

export default PracExpInput;