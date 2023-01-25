import React, { Component } from 'react';

class CVResult extends Component {
    render() {
        const userData = this.props.userData;
        const eduList = this.props.userData.userEdu.map((entry) => 
            <li key={entry.id}>{entry.schoolNameInput} - {entry.studyInput} - {entry.studyDateInput}</li>
        )

        return (
            <div className='cv-result'>
                <p>CV Result...</p>
                <p>Name: {userData.nameInput}</p>
                <p>Email: {userData.emailInput}</p>
                <p>Phone: {userData.phoneInput}</p>
                <p>Education:</p>
                <ul>{eduList}</ul>
            </div>
        );
    }
}

export default CVResult;