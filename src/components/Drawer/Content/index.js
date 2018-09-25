import React from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import {setAPR, setLoanAmount, setTerm} from './actions';

class Content extends React.Component {
  constructor(props) {
      super(props);
      // Map action creators to input names
      this.actions = {
        apr: setAPR,
        loanAmount: setLoanAmount,
        term: setTerm
      };

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;

    this.props.dispatch(
      this.actions[name]({value})
    );
  }

  render() {
    let {apr, loanAmount, term} = this.props.mortgage;
    return (
      <List>
        <ListItem>
          <TextField
            id="loanAmount"
            label="Loan Amount"
            name="loanAmount"
            onChange={this.handleChange}
            type="number"
            value={loanAmount}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="apr"
            label="APR"
            name="apr"
            onChange={this.handleChange}
            type="number"
            value={apr}
          />
        </ListItem>
        <ListItem>
        <TextField
          id="term"
          label="Term"
          name="term"
          onChange={this.handleChange}
          type="number"
          value={term}
        />
        </ListItem>
      </List>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const mapStateToProps = (state) => ({
  mortgage: state.mortgage
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
