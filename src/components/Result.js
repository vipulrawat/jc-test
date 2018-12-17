import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';

const ErrorContainer = (props) => {
  console.log(props.error);
  return (
    <div>
      <h1>Error !</h1>
      <p>Check console for stack trace</p>
    </div>
  );
}

class Result extends React.Component {
  render() {
    if(this.props.error.isError) {
      return (<ErrorContainer error={this.props.error}/>);
    }
    return (
      <Card className="card">
        <CardContent>
          {
            Number.isNaN(this.props.number) ? 
            <Typography color="textSecondary" gutterBottom>
              Click 'Activate' first and then 'Next'
            </Typography> : 
            <Typography variant="h5" component="h2" className="result">
              {this.props.number}
            </Typography>
          }
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return { number: state.number, error: state.error };
}
export default connect(mapStateToProps)(Result);