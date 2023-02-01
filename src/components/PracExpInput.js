import React, { Component } from 'react';
import PracEntry from './PracEntry';
import uniqid from 'uniqid';

class PracExpInput extends Component {
    constructor(props) {
        super(props);

        this.addPracEntry = this.addPracEntry.bind(this);
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
    
    render() {
        const ud = this.props.userData;

        let entryList = ud.userPrac.map(entry => <li key={entry.id}><PracEntry/></li>)

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