import React from 'react';
import {connect} from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Content from './Content';
import Header from './Header';
import {closeDrawer} from './actions';
import styles from './styles';

function Drawer(props) {
  const {closeDrawer, mortgage, open} = props;

  return (
      <React.Fragment>
        <SwipeableDrawer
          open={open}
          onClose={() => {}}
          onOpen={() => {}}
        >
            <Header onClose={closeDrawer} monthlyPayment={mortgage.monthlyPayment} />
            <Divider />
            <Content />
        </SwipeableDrawer>
      </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  mortgage: state.mortgage,
  open: state.drawer.open
});

export default connect(mapStateToProps, {closeDrawer})(withStyles(styles)(Drawer));
