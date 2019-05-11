import React from 'react';
import { connect } from 'react-redux';

import './Dashboard.css';

class Dashboard extends React.Component{    
    headers = Object.keys(this.props.employeeListData[0]);
    tableHeader = () => (
        <thead>
            <tr>
                {this.headers.map(header => (<th key={header}>{header.toUpperCase()}</th>))}
            </tr>
        </thead>
    )
    cellRenderer = () => (
        <tbody>
            {
                this.props.employeeListData.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNo}</td>
                    </tr>
                ))
            }
        </tbody>
    )
    render(){
        return(
            <table id="employees">
                {this.tableHeader()}
                {this.cellRenderer()}
            </table>                
        )
    }
}

const mapStateToProps = state => {
    return{
        employeeListData: state.employeeListReducer.employeeListData
    }
}
export default connect(mapStateToProps)(Dashboard);