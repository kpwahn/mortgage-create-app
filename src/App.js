import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'
import  {Switch, Route} from 'react-router';

import Mortgage from './components/Mortgage';

class App extends Component {
    render() {
        return (
          <Mortgage></Mortgage>
        );
    }
}

export default App;

/*
<BrowserRouter>
  <Switch>
      <Route exact path="/" component={Mortgage} />
  </Switch>
</BrowserRouter>
*/
