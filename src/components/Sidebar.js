import React, { Component } from 'react';
import firebase from 'firebase';

import AuthService from '../services/AuthService.js';
import UserMenu from './UserMenu.js';
import ThingCounter from './ThingCounter.js';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false
        }

        var self = this;

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                self.setState({ signedIn: true })
            } else {
                self.setState({ signedIn: false })
            }
        });
    }

    renderThingCounter() {
        return <ThingCounter />;
    }

    render() {

        var user = AuthService.getCurrentUser();

        return (
            <section className='sidebar'>
                <h1 className='title'>52 Things</h1>
                <UserMenu user={user} />
                {this.state.signedIn ? this.renderThingCounter() : ''}
            </section>
        );
    }
}

export default Sidebar
