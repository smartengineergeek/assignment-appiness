import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux-store/actions';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.inputUsernameRef = React.createRef();
        this.inputPasswordRef = React.createRef();
    }
    clickHandler = () => {
        let username = this.inputUsernameRef.current.value;
        let password = this.inputPasswordRef.current.value;
        
        if(username === "hruday@gmail.com" && password === "hruday123"){
            this.props.onloginUser(true);
            // this.props.history.push('/employeeList');
            this.props.history.push('/dashboard');
        }
    }
    render(){
        return(
            <div>
                <ul style={{listStyleType: "none"}}>
                    <li>Username <input type='text' value="hruday@gmail.com" ref={this.inputUsernameRef} /></li>
                    <li>Password <input type='password' value="hruday123" ref={this.inputPasswordRef} /></li>
                    <li><button onClick={() => this.clickHandler()}>Login</button></li>
                </ul>                
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