import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import EmployeeList from '../EmployeeList/EmployeeList';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';

const SecuredRotes = () => (
  <React.Fragment>
    <Route path="/employeeList" component={EmployeeList} />
    <Route path="/dashboard" component={Dashboard} />
  </React.Fragment>
)
const App = (props) => {
  console.log(props.isUserAuthenticated)
  return(
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        {
          props.isUserAuthenticated ? <SecuredRotes /> : null
        }
        <Route render={() => <div><center>Page Not Found</center></div>} />
    </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    isUserAuthenticated: state.isUserAuthenticated
  }
}

export default connect(mapStateToProps)(App);
