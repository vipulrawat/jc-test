import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import generator from './backend';
import Buttons from './components/Buttons';
import Result from './components/Result';
import SelectSequence from './components/SelectSequence';

class App extends Component {
  constructor(props) {
    super(props);
    this.gen = generator(this.props.sequence).pipeline().invoke(); // default as prime
  }
  
  render() {
    return (
      <div className="main">
        <h1>Click Activate to run: <code>{this.props.sequence}</code></h1>
        <SelectSequence />
        <Buttons />
        <Result />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { sequence: state.sequence };
};
export default connect(mapStateToProps)(App);
