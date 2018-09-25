import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {formatMoney} from 'accounting-js';
import styles from './styles';

class Header extends React.Component {
    render() {
      let {classes, onClose} = this.props;

      return (
        <div className={classes.DrawerHeader}>
          <div className={classes.MonthlyPayment}>
            <Typography variant="caption" color="inherit" classes={{root: classes.root}}>
              Monthly Payment:
            </Typography>
            <Typography variant="subheading" color="inherit" classes={{root: classes.root}}>
              {formatMoney(this.props.monthlyPayment)}
            </Typography>
          </div>
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      )
    }
}

Header.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
