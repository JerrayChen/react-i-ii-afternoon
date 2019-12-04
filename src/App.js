import React, { Component } from 'react';

import './App.css';
import data from './data';
import StaffDisplay from './StaffDisplay';
import ControlBtn from './ControlBtn';

class App extends Component {

  constructor() {
    super();
    this.state = {
      staffArr: data,
      currIndex: 0
    };
    this.browseStaff = this.browseStaff.bind(this);
  }

  browseStaff(next) {
    // to next data
    if (next) {
      // available value
      if (this.state.currIndex < this.state.staffArr.length - 1) {
        this.setState({
          currIndex: this.state.currIndex + 1
        })
      }
      // to previous data
    } else {
      // available value
      if (this.state.currIndex > 0) {
        this.setState({
          currIndex: this.state.currIndex - 1
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className='Head'>Home</div>
        <div className='Body'>
          <StaffDisplay staff={this.state.staffArr[this.state.currIndex]} total={this.state.staffArr.length} />
          <ControlBtn browseFcn={this.browseStaff} arrInd={this.state.currIndex} />
        </div>
      </div>
    );
  }
}



export default App;
