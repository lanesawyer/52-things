import React, { Component } from 'react';
import firebase from 'firebase';

import AuthService from '../services/AuthService.js';
import UserMenu from './UserMenu.js';
import ThingCounter from './ThingCounter.js';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: AuthService.getCurrentUser() != null
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
        if (this.state.signedIn) {
            return <ThingCounter />;
        } else {
            return <div>Sup</div>
        }
    }

    render() {

        var user = AuthService.getCurrentUser();

        return (
            <section className='sidebar'>
                <h1 className='title'>52 Things</h1>
                <UserMenu user={user} />
                {this.renderThingCounter()}
            </section>
        );
    }
}

export default Sidebar
