import React, { Component } from 'react';

class DataInputForm extends Component {
    render() {
        return (
            <div className='data-input-form'>
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
                    <fieldset>
                        <legend>Educational Experience</legend>
                        <button>+ Add Entry</button>
                    </fieldset>
                    <fieldset>
                        <legend>Practical Experience</legend>
                        <button>+ Add Entry</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default DataInputForm;