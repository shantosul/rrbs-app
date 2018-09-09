import React, { Component } from 'react';

import Spinner from './components/spinner/spinner';

import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Homepage from './components/pages/home';
import Signin from './components/pages/login';
import Signup from './components/pages/register';

const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    const { loading } = this.state;

    return (
      loading ?      
      <Spinner/>
      :
      <Router history={history}>
        <div>
            <Route exact path='/' component={Signin} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            <Route path='/home' component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
