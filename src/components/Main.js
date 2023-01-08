import React, { Component } from 'react';
import DataInputForm from './DataInputForm';
import CVResult from './CVResult';

class Main extends Component {
    render() {
        return (
            <main className='page-main'>
                <DataInputForm/>
                <CVResult/>
            </main>
        );
    }
}

export default Main;