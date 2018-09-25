import React from 'react';
import {connect} from 'react-redux';
import MaterialButton from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import {setExtra} from '../../Drawer/Content/actions';
import Item from '../Item';

class Button extends React.Component {
  state = {
    open: false,
    extra: 0
  };

  comonentDidMount() {
    this.setState({
      extra: localStorage.getItem(this.props.data.index) || 0
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.setExtra({
      index: this.props.data.index,
      value: this.state.extra
    });
    this.setState({ open: false });
  };

  handleExtra = (e) => {
    this.setState({extra: e.target.value});
  };

  render() {
    return (
      <React.Fragment>
        <MaterialButton onClick={this.handleClickOpen} style={{...this.props.style, display: 'flex', height: '55px'}}>
          <Item mortgage={this.props.data}/>
        </MaterialButton>
        <Dialog
          open={this.state.open}
        >
          <DialogContent>
            <TextField
              autoFocus
              id="extra"
              label="Extra Payment"
              onChange={this.handleExtra}
              type="number"
              value={this.state.extra}
            />
          </DialogContent>
          <DialogActions>
            <MaterialButton onClick={this.handleClose} color="primary">
              Cancel
            </MaterialButton>
            <MaterialButton onClick={this.handleClose} color="primary">
              Add
            </MaterialButton>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default connect(null, {setExtra})(Button);
