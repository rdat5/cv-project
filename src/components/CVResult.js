import React, { Component } from 'react';

class CVResult extends Component {
    render() {
        const userData = this.props.userData;

        return (
            <div className='cv-result'>
                <p>CV Result...</p>
                <p>Name: {userData.nameInput}</p>
                <p>Email: {userData.emailInput}</p>
                <p>Phone: {userData.phoneInput}</p>
            </div>
        );
    }
}

export default CVResult;