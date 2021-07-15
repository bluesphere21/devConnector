import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './compontents/layout/Navbar';
import Landing from './compontents/layout/Landing';
import Register from './compontents/auth/Register';
import Login from './compontents/auth/Login';
import Alert from './compontents/layout/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar/>
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section> 
      </Fragment>
    </Router>
  </Provider>
);

export default App;
