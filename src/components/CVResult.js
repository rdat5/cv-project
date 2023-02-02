import React, { Component } from 'react';

class CVResult extends Component {
    render() {
        const { userData } = this.props;

        const eduList = this.props.userData.userEdu.map((entry) => 
            <li key={entry.id}>{entry.schoolNameInput} - {entry.studyInput} - {entry.studyDateInput}</li>
        )
        const pracList = this.props.userData.userPrac.map((entry) => 
        <li key={entry.id}>{entry.companyNameInput} - {entry.positionInput} - {entry.mainTaskInput} - {entry.workedFromInput} - {entry.workedToInput}</li>
    )

        return (
            <div className='cv-result'>
                <p>CV Result...</p>
                <p>Name: {userData.nameInput}</p>
                <p>Email: {userData.emailInput}</p>
                <p>Phone: {userData.phoneInput}</p>
                <p>Education:</p>
                <ul>{eduList}</ul>
                <p>Practical Experience:</p>
                <ul>{pracList}</ul>
            </div>
        );
    }
}

export default CVResult;