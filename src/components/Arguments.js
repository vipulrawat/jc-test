import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import React from 'react';
import { connect } from 'react-redux';

import updateArguments from '../actions/updateArgs';

class Arguments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      args: [{ value: this.props.argsArray[0] }, { value: this.props.argsArray[1] }]
    }
  }
  
  handleArgsChange = (idx) => (e) => {
    const newArguments = this.state.args.map((arg, idxx) => {
      if (idx !== idxx) return arg;
      return { ...arg, value: parseInt(e.target.value) }
    });
    this.setState({ args: newArguments });
  }

  handleArgClick = () => {
    const { args } = this.state;
    const arr = [];
    args.map(obj => arr.push(obj.value));
    this.props.onArgsUpdate(arr);
  }

  handleRemoveArg = (idx) => () => {
    this.setState({ args: this.state.args.filter((arg, idxx) => idx !== idxx) });
  }

  addArg = () => {
    this.setState({ args: this.state.args.concat([{ value: 1 }]) });
  }

  render() {
    return(
      <div className="args-mod">
        <Grid container spacing={24}>
          {this.state.args.map((arg, idx) => (
            <Grid item key={idx}>
              <Input type="number"
                value={arg.value} 
                onChange={this.handleArgsChange(idx)} 
                disabled={this.props.disableToggle} />
              <Button 
                variant="outlined"
                color="secondary"
                onClick={this.handleRemoveArg(idx)}
                disabled={this.props.disableToggle}>
                -
              </Button>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          className="mod-btn"
          color="secondary"
          onClick={this.addArg}
          disabled={this.props.disableToggle}>
          +
        </Button>
        <Button
          color="primary"
          variant="outlined"
          className="mod-btn"
          onClick={this.handleArgClick}
          disabled={this.props.disableToggle}>
          Set
        </Button>
      </div>
    );
  }
}

const mapActionsToProps = {
  onArgsUpdate: updateArguments,
};

const mapStateToProps = state => {
  return { argsArray: state.argsArray };
};

export default connect(mapStateToProps, mapActionsToProps)(Arguments);
