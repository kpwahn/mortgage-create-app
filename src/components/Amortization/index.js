import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import List from './List'
import styles from './styles';

class Amortization extends React.Component {
    render() {
      let {classes} = this.props;

        return (
            <main className={classes.Amortization}>
              <List />
            </main>
        )
    }
}

export default withStyles(styles)(Amortization);
