import React, { Component } from 'react';

import ThingsService from '../services/ThingsService.js';
import UserMenu from './UserMenu.js';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    render() {
        
        var user = ThingsService.getCurrentUser();

        return (
            <div className="header">
                <div className="title">52 Things</div>
                <UserMenu userName={user ? 'In!' : 'Out...'} />
            </div>
        );
    }
}

export default Header