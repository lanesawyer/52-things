import React, { Component } from 'react';

import firebase from 'firebase';

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
                self.setState({signedIn: true})
            } else {
                self.setState({signedIn: false})
            }
        });

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }, function(error) {
            // An error happened.
        });
    }

    render() {
        if (this.state.signedIn) {
            return (
                <div className='auth'>
                    <div>hieieie</div>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='auth'>
                    <button>Login!</button>
                </div>
            );
        }
    }
}

export default UserMenu
