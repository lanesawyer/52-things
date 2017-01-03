import React, { Component } from 'react';

import firebase from "firebase";

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'test',
            userId: ''
        };
    }

    render() {
        var user = firebase.auth().currentUser;

        if (user) {
            return (
                <div className='auth'>
                    <div>{user.email}</div>
                    <button>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='auth'>
                    <button>Login!</button>
                </div>
            );
        }

        return (<div>wat</div>);
    }
}

export default UserMenu
