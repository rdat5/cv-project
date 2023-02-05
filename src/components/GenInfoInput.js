import React, { Component } from 'react';

class GenInfoInput extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.props.inputHandler(name, value);
    }

    render() {
        const { userData } = this.props;

        return(
            <fieldset>
                <legend>General Information</legend>
                <label htmlFor="nameInput">Name:</label>
                <input 
                    type="text" 
                    id="nameInput" 
                    name="nameInput"
                    placeholder="Jane Doe"
                    value={userData.nameInput}
                    onChange={this.handleInputChange}/>
                <br></br>
                <br></br>
                <label htmlFor="emailInput">Email:</label>
                <input 
                    type="email" 
                    id="emailInput" 
                    name="emailInput"
                    placeholder="JaneDoe@company.com"
                    value={userData.emailInput}
                    onChange={this.handleInputChange}/>
                <br></br>
                <br></br>
                <label htmlFor="phoneInput">Phone:</label>
                <input 
                    type="tel" 
                    id="phoneInput" 
                    name="phoneInput"
                    placeholder="123-456-7890"
                    value={userData.phoneInput}
                    onChange={this.handleInputChange}/>
            </fieldset>
        );
    }
}

export default GenInfoInput;