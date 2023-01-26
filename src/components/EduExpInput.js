import React, { Component } from 'react';
import EduEntry from './EduEntry';

class EduExpInput extends Component {
    render() {
        return(
            <fieldset>
                <legend>Educational Experience</legend>
                <EduEntry/>
                <button>+ Add Entry</button>
            </fieldset>
        );
    }
}

export default EduExpInput;