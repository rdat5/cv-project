import React, { Component } from 'react';
import EduEntry from './EduEntry';

class EduExpInput extends Component {
    constructor(props) {
        super(props);

        this.onAddEntry = this.onAddEntry.bind(this);
    }

    onAddEntry(e) {
        e.preventDefault();
        this.props.eduEntryFn();
    }

    render() {
        const ud = this.props.userData;

        let entryList = ud.userEdu.map((entry) => <li key={entry.id}><EduEntry/></li>)

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