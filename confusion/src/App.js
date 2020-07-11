import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter as Router } from "react-router-dom";
  
class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <Main/>
          </div>
        </Router>
    );
  }
}


export default App;
