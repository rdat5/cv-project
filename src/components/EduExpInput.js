import React, { Component } from 'react';
import EduEntry from './EduEntry';

class EduExpInput extends Component {
    render() {
        const ud = this.props.userData;

        let entryList = ud.userEdu.map((entry) => <li key={entry.id}><EduEntry/></li>)

        return(
            <fieldset>
                <legend>Educational Experience</legend>
                <ul>
                    {entryList}
                </ul>
                <button>+ Add Entry</button>
            </fieldset>
        );
    }
}

export default EduExpInput;