import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {formatMoney} from 'accounting-js';
import {openDrawer} from '../Drawer/actions';
import styles from './styles';

function AppBar(props) {
  const { classes, mortgage} = props;
  let totalInterestSaved = mortgage.totalInterestPaid - mortgage.amortizationExtra[mortgage.amortizationExtra.length - 1].totalInterestPaid;

  return (
    <React.Fragment>
      <MaterialAppBar
        className={classes.MaterialAppBar}
        position={'sticky'}
      >
        <Toolbar variant="dense" className={classes.Toolbar} classes={{root: classes.root}}>
          <div className={classes.left}>
            <IconButton
                color="inherit"
                onClick={props.openDrawer}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.interestHeaders}>
            <div>
              <Typography
                color="inherit"
                variant="caption"
              >
                Interest Paid:
              </Typography>
              <Typography
                color="inherit"
                variant="subheading"
              >
                {formatMoney(mortgage.totalInterestPaid)}
              </Typography>
            </div>
            <div>
              <Typography
                color="inherit"
                variant="caption"
              >
                Interest Saved:
              </Typography>
              <Typography
                color="inherit"
                variant="subheading"
              >
                {formatMoney(totalInterestSaved)}
              </Typography>
            </div>
          </div>
        </Toolbar>
      </MaterialAppBar>
    </React.Fragment>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  mortgage: state.mortgage
});

export default connect(mapStateToProps, {openDrawer})(withStyles(styles)(AppBar));
