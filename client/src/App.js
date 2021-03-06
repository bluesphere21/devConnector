import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './compontents/layout/Navbar';
import Landing from './compontents/layout/Landing';
import Register from './compontents/auth/Register';
import Login from './compontents/auth/Login';
import Alert from './compontents/layout/Alert';
import Dashboard from './compontents/dashboard/Dashboard';
import PrivateRoute from './compontents/routing/PrivateRoute';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
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
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </section> 
      </Fragment>
    </Router>
  </Provider>
  )
};

export default App;
