import React, { Component } from 'react';
import Main from './components/Main';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="page-wrap">
        <header className='page-header'>
          <h1>CV BUILDER</h1>
        </header>
        <Main/>
        <footer className="page-footer">
          <small>Ray Allen Datuin 2023</small>
        </footer>
      </div>
    );
  }
}

export default App;
