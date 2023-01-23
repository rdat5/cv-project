import React, { Component } from 'react';

class GenInfoInput extends Component {
    render() {
        return(
            <fieldset>
                <legend>General Information</legend>
                <label htmlFor="nameInput">Name:</label>
                <input 
                    type="text" 
                    id="nameInput" 
                    name="nameInput"/>
                <br></br>
                <br></br>
                <label htmlFor="emailInput">Email:</label>
                <input 
                    type="text" 
                    id="emailInput" 
                    name="emailInput"/>
                <br></br>
                <br></br>
                <label htmlFor="phoneInput">Phone:</label>
                <input 
                    type="text" 
                    id="phoneInput" 
                    name="phoneInput"/>
            </fieldset>
        );
    }
}

export default GenInfoInput;