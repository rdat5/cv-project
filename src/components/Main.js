import React, { Component } from 'react';
import DataInputForm from './DataInputForm';
import CVResult from './CVResult';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            userEmail: '',
            userPhone: '',
            userEdu: [],
            userPrac: []
        };

        this.inputSubmit = this.inputSubmit.bind(this);
    }

    inputSubmit(iName, iEmail, iPhone, iEdu, iPrac){
        this.setState({
            userName: iName,
            userEmail: iEmail,
            userPhone: iPhone,
            userEdu: iEdu,
            userPrac: iPrac
        });
    }

    render() {
        return (
            <main className='page-main'>
                <DataInputForm submitFn={this.inputSubmit}/>
                <CVResult/>
            </main>
        );
    }
}

export default Main;