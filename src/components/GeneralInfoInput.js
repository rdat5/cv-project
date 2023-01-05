import React, { Component } from 'react';

class GeneralInfoInput extends Component {
    render() {
        return (
            <form>
                <fieldset>
                    <legend>General Information</legend>
                    <label htmlFor="fullName">Name:</label>
                    <input type="text" id="fullName" name="fullName"></input>
                    <br></br>
                    <br></br>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email"></input>
                    <br></br>
                    <br></br>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone"></input>
                    <br></br>
                    <br></br>
                    <button>Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default GeneralInfoInput;