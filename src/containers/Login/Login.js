import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux-store/actions';
import { Credentials } from './Credentials';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoginDetailsCorrect: false
        }
        this.inputUsernameRef = React.createRef();
        this.inputPasswordRef = React.createRef();
    }
    clickHandler = () => {
        let username = this.inputUsernameRef.current.value;
        let password = this.inputPasswordRef.current.value;
        
        if(username === Credentials.username && password === Credentials.password){
            this.props.onloginUser(true);
            this.setState({isLoginDetailsCorrect: false});
            this.props.history.push('/employeeList');
        }else{
            this.setState({isLoginDetailsCorrect: true});
        }
    }
    render(){
        return(
            <div className="login-page">
                <h1>APPINESS</h1>
                <h3>LOGIN   </h3>
                <ul style={{listStyleType: "none"}}>
                    <li>Username <input type='text'  ref={this.inputUsernameRef} /></li>
                    <li>Password <input type='password'  ref={this.inputPasswordRef} /></li>
                    <li><button onClick={() => this.clickHandler()}>Login</button></li>
                </ul>                
                {
                    this.state.isLoginDetailsCorrect ? <div className="error">Either Username or Password is incorrect. Please Check.</div>: null
                }
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        onloginUser: (value) => dispatch({type: actionTypes.LOGIN, value: value})
    }
}

export default connect(null, mapDispatchToProps)(Login);