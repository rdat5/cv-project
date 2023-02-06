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
        const { userPrac } = this.props.userData;

        let newPracList = [];

        userPrac.forEach(element => {
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
        const { userPrac } = this.props.userData;
        let newPracList = [];

        userPrac.forEach(element => {
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
        const { userData } = this.props;

        let entryList = userData.userPrac.map(entry => <li key={entry.id}><PracEntry entryData={entry} pracInputFn={this.entryInputChange} removeEntryFn={this.removePracEntry}/></li>)

        return(
            <fieldset className='prac-input'>
                <legend>Practical Experience</legend>
                <ul className='entry-input-list'>
                    {entryList}
                </ul>
                <button className='add-btn' onClick={this.addPracEntry}>+ Add Entry</button>
            </fieldset>
        );
    }
}

export default PracExpInput;