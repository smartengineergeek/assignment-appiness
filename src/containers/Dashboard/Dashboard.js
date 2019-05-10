import React from 'react';

import { userData } from './data';

class Dashboard extends React.Component{    
    headers = Object.keys(userData[0]);
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
                userData.map(user => (
                    <tr>
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
            <React.Fragment>
                    <table>
                        {this.tableHeader()}
                        {this.cellRenderer()}
                    </table>                
            </React.Fragment>
        )
    }
}

export default Dashboard;