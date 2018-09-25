import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import {formatMoney} from 'accounting-js';

import styles from './styles';

class Item extends React.Component {
    render() {
      let {classes, mortgage} = this.props;

      let extra = (parseFloat(mortgage.extra)) ? ` + ${mortgage.extra}`: '';

      return (
          <div className={classes.ListItem}>
            <ListItemText
              primary={`${formatMoney(mortgage.principal)}${extra}`}
              secondary={formatMoney(mortgage.interest)}
              classes={{root: classes.rightRoot}}
            />
            <ListItemText
              primary={''}
              secondary={formatMoney(mortgage.remainingPrincipal)}
              classes={{root: classes.leftRoot}}
            />
          </div>
      )
    }
}

export default withStyles(styles)(Item);
