import Button from '@material-ui/core/Button';
import React from 'react';
import { connect } from 'react-redux';

import updateError from '../actions/updateError';
import updateResult from '../actions/updateResult';
import generator from '../backend';
import Arguments from './Arguments';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
    }
  }

  handleActivateClick = () => {
    const sequencer = this.props.sequence;
    if (sequencer === 'range' || sequencer === 'partialSum') {
      this.gen = generator(this.props.sequence, ...this.props.argsArray).pipeline().invoke();
      this.setState({ isDisabled: false });
    } else {
      this.gen = generator(this.props.sequence).pipeline().invoke();
      this.setState({ isDisabled: true });
    }
  }

  handleNextClick = () => {
    try {
      const nextNumber = this.gen.next();
      this.props.onResultUpdate(nextNumber);
      this.props.onError(false)
    } catch(err) {
      this.props.onError(true, err)
    }
  }

  render() {
    if (this.state.err) throw this.state.err;
    return (
      <div>
        <Arguments disableToggle= {this.state.isDisabled} />
        <div className="btn-container">
          <Button variant="outlined" color="secondary" onClick={this.handleActivateClick}>
            Activate
          </Button>
          <Button variant="contained" color="primary" onClick={this.handleNextClick}>
            Next
          </Button>
        </div>
      </div>
    );
  }
}

const mapActionsToProps = {
  onResultUpdate: updateResult,
  onError: updateError,
};

const mapStateToProps = state => {
  return { sequence: state.sequence, argsArray: state.argsArray };
};

export default connect(mapStateToProps, mapActionsToProps)(Buttons);
