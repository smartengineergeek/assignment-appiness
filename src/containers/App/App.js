import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../Login/Login';
import EmployeeList from '../EmployeeList/EmployeeList';

const SecuredRotes = () => (<Route path="/employeeList" component={EmployeeList} />);

const App = (props) => {
  // console.log(props.isUserAuthenticated)
  return(
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        {
          props.isUserAuthenticated ? <SecuredRotes /> : null
        }
        <Route render={() => <div className="not-found">
                                <center>
                                  <h1>404 Page Not Found</h1>
                                </center></div>} />
    </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    isUserAuthenticated: state.loginReducer.isUserAuthenticated
  }
}

export default connect(mapStateToProps)(App);
