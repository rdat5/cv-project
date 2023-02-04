import React, { Component } from 'react';

class CVResult extends Component {
    constructor(props) {
        super(props);

        this.onEditClick = this.onEditClick.bind(this);
    }

    onEditClick(e) {
        e.preventDefault();

        this.props.toggleEditingFn(true);
    }

    render() {
        const { userData } = this.props;

        const eduList = this.props.userData.userEdu.map((entry) => 
            <li key={entry.id}>
                <h4>{entry.schoolNameInput} - {entry.studyDateInput}</h4>
                <p>{entry.studyInput}</p>
            </li>
        );

        const pracList = this.props.userData.userPrac.map((entry) => 
            <li key={entry.id}>
                <h4>{entry.companyNameInput} - {entry.positionInput}</h4>
                <p>{entry.mainTaskInput}</p>
                <p>{entry.workedFromInput} - {entry.workedToInput}</p>
            </li>
        );

        let EducationSection;

        if (userData.userEdu.length > 0) {
            EducationSection = <div>
                <h3>Education</h3>
                <ul>{eduList}</ul>
            </div>
        }

        let ExperienceSection;

        if (userData.userPrac.length > 0) {
            ExperienceSection = <div>
                <h3>Experience</h3>
                <ul>{pracList}</ul>
            </div>
        }

        return (
            <div className='cv-result'>
                <h2>{userData.nameInput} | Curriculum Vitae</h2>
                <p>{userData.phoneInput} | {userData.emailInput}</p>
                {EducationSection}
                {ExperienceSection}
                <button onClick={this.onEditClick}>Edit</button>
            </div>
        );
    }
}

export default CVResult;