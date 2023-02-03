import React, { Component } from 'react';

class CVResult extends Component {
    render() {
        const { userData } = this.props;

        const eduList = this.props.userData.userEdu.map((entry) => 
            <li key={entry.id}>
                <h4>{entry.schoolNameInput} - {entry.studyDateInput}</h4>
                <p>{entry.studyInput}</p>
            </li>
        );

        const pracList = this.props.userData.userPrac.map((entry) => 
            <li>
                <h4>{entry.companyNameInput} - {entry.positionInput}</h4>
                <p>{entry.mainTaskInput}</p>
                <p>{entry.workedFromInput} - {entry.workedToInput}</p>
            </li>
        );

        return (
            <div className='cv-result'>
                <h2>{userData.nameInput} | Curriculum Vitae</h2>
                <p>{userData.phoneInput} | {userData.emailInput}</p>
                <h3>Education</h3>
                <ul>{eduList}</ul>
                <h3>Experience</h3>
                <ul>{pracList}</ul>
            </div>
        );
    }
}

export default CVResult;