import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import List from './List'
import styles from './styles';

class Amortization extends React.Component {
    render() {
      let {classes, open} = this.props;

        return (
            <main className={
              classNames(
                classes.Amortization, {
                [classes.contentShift]: open
              })
            }>
              <List />
            </main>
        )
    }
}

const mapStateToProps = (state) => (
  {open: state.drawer.open}
)

export default connect(mapStateToProps, null)(withStyles(styles)(Amortization));
