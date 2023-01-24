import React, { Component } from 'react';

class GenInfoInput extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.props.inputHandler(e);
    }

    render() {
        const ud = this.props.userData;
        return(
            <fieldset>
                <legend>General Information</legend>
                <label htmlFor="nameInput">Name:</label>
                <input 
                    type="text" 
                    id="nameInput" 
                    name="nameInput"
                    value={ud.nameInput}
                    onChange={this.handleInputChange}/>
                <br></br>
                <br></br>
                <label htmlFor="emailInput">Email:</label>
                <input 
                    type="text" 
                    id="emailInput" 
                    name="emailInput"
                    value={ud.emailInput}
                    onChange={this.handleInputChange}/>
                <br></br>
                <br></br>
                <label htmlFor="phoneInput">Phone:</label>
                <input 
                    type="text" 
                    id="phoneInput" 
                    name="phoneInput"
                    value={ud.phoneInput}
                    onChange={this.handleInputChange}/>
            </fieldset>
        );
    }
}

export default GenInfoInput;