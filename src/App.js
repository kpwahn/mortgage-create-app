import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'
import  {Switch, Route} from 'react-router';

import Mortgage from './components/Mortgage';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Mortgage} />
            </Switch>
          </BrowserRouter>
        );
    }
}

export default App;
