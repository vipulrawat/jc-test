import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import { connect } from 'react-redux';

import updateSequence from '../actions/updateSequence';


class SelectSequence extends React.Component {
  selectChange = (event) => {
    const newSequence = event.target.value;
    this.props.onSequenceUpdate(newSequence);
  }
  render() {
    return(
      <Select
      className="select-box"
      onChange={this.selectChange}
      value={this.props.sequence}
    >
      <MenuItem value={"factorial"}>Factorial Sequence</MenuItem>
      <MenuItem value={"fibonacci"}>Fibonacci Sequence</MenuItem>
      <MenuItem value={"partialSum"}>Partial Sum Sequence</MenuItem>
      <MenuItem value={"range"}>Range Sequence</MenuItem>
      <MenuItem value={"prime"}>Prime Sequence</MenuItem>
    </Select>
    );
  }
}
const mapActionsToProps = {
  onSequenceUpdate: updateSequence,
};

const mapStateToProps = state => {
  return { sequence: state.sequence };
};
export default connect(mapStateToProps, mapActionsToProps)(SelectSequence);