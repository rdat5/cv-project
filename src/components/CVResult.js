import React, { Component } from 'react';

class CVResult extends Component {
    render() {
        const userData = this.props.userData;

        return (
            <div className='cv-result'>
                <p>CV Result...</p>
                <p>Name: {userData.userName}</p>
                <p>Email: {userData.userEmail}</p>
                <p>Phone: {userData.userPhone}</p>
            </div>
        );
    }
}

export default CVResult;