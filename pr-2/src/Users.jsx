import React, { Component } from 'react'
import './users.css';

class users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: props.userList
        }
    }

    render() {
        return (
            <div align="center">
                <h1>Users Details</h1>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Grid</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Course</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((u) => {
                            const {grid, name, email, password, course, city} = u;
                            return (
                                <tr key={grid}>
                                    <td>{grid}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>{course}</td>
                                    <td>{city}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default users
