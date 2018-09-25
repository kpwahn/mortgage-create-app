import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { List as VirtualizedList, WindowScroller  } from 'react-virtualized';

import Button from '../Button';
import styles from './styles';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.rowRenderer = this.rowRenderer.bind(this);
  }

  rowRenderer({key, index, style}) {
    return (
      <Button key={key} data={this.props.mortgage.amortizationExtra[index]} style={style}/>
    );
  }

  _setListRef = ref => {
    this._list = ref;
    this._registerList(ref);
  };

  render() {
    let {classes} = this.props;
    let {amortizationExtra} = this.props.mortgage;

    return (
      <WindowScroller>
        {
          ({ height, isScrolling, onChildScroll, scrollTop, width }) => (
            <VirtualizedList
              amortizationExtra={amortizationExtra}
              className={classes.VirtualizedList}
              width={width}
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              overscanRowCount={20}
              rowCount={amortizationExtra.length}
              rowHeight={55}
              rowRenderer={this.rowRenderer}
              scrollTop={scrollTop}
            />
          )
        }
      </WindowScroller>
    );
  }
}

const mapStateToProps = (state) => ({
  mortgage: state.mortgage,
  open: state.drawer.open
});

export default connect(mapStateToProps, null)(withStyles(styles)(List));
