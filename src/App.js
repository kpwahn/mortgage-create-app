import React, {Component} from 'react';

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
Implementing React Router with github pages takes some extra work
<BrowserRouter>
  <Switch>
      <Route exact path="/" component={Mortgage} />
  </Switch>
</BrowserRouter>
*/
