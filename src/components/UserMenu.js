import React, { Component } from 'react';
import firebase from 'firebase';

import AuthService from '../services/AuthService.js';

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'test',
            userId: ''
        };

        var self = this;

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                self.setState({ signedIn: true })
            } else {
                self.setState({ signedIn: false })
            }
        });
    }

    handleLogout = (event) => {
        AuthService.logout();
    }

    renderUserMenu = () => {
        return (
            <div>
                <div>{this.props.user.displayName}</div>
                <div>{this.props.user.email}</div>
                <div><img src={AuthService.getGravitarUrl(this.props.user.email)} alt='Profile' /></div>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }

    render() {
        return (
            <div className='auth'>
                {this.state.signedIn ? this.renderUserMenu() : "" }
            </div>
        );
    }
}

export default UserMenu
