import React, { Component } from 'react';

import AuthService from '../services/AuthService.js';
import UserMenu from './UserMenu.js';
import ThingCounter from './ThingCounter.js';

class Sidebar extends Component {
    render() {
        
        var user = AuthService.getCurrentUser();

        return (
            <section className='sidebar'>
                <h1 className='title'>52 Things</h1>
                <UserMenu user={user} />
                <ThingCounter />
            </section>
        );
    }
}

export default Sidebar
