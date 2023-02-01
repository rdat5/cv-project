import React, { Component } from 'react';
import PracEntry from './PracEntry';

class PracExpInput extends Component {
    render() {
        return(
            <fieldset>
                <legend>Practical Experience</legend>
                <button>+ Add Entry</button>
            </fieldset>
        );
    }
}

export default PracExpInput;