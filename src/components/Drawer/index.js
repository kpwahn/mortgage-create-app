import React from 'react';
import {connect} from 'react-redux';
import MaterialDrawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Content from './Content';
import Header from './Header';
import {closeDrawer} from './actions';
import styles from './styles';

function Drawer(props) {
  const {classes, closeDrawer, mortgage, open} = props;

  return (
      <React.Fragment>
          <MaterialDrawer
            variant="persistent"
            open={open}
            classes={{
              docked: classes.MaterialDrawerDocked,
              paper: classes.MaterialDrawer
            }}
          >
            <Header onClose={closeDrawer} monthlyPayment={mortgage.monthlyPayment} />
            <Divider />
            <Content />
          </MaterialDrawer>
      </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  mortgage: state.mortgage,
  open: state.drawer.open
});

export default connect(mapStateToProps, {closeDrawer})(withStyles(styles)(Drawer));
