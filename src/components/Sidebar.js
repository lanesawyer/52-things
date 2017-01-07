import React, { Component } from 'react';

import AuthService from '../services/AuthService.js';
import UserMenu from './UserMenu.js';
import ThingCounter from './ThingCounter.js';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    render() {
        
        var user = AuthService.getCurrentUser();

        return (
            <section className='sidebar'>
                <h1 className='title'>52 Things</h1>
                <UserMenu user={user} />
                <ThingCounter />
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur cursus nibh id sodales. Curabitur lorem felis, ornare sed consequat id, mattis a mi. Nam euismod congue ipsum, at feugiat augue pellentesque at. Sed blandit lacinia eros sit amet semper. Quisque pretium sapien eget nisi elementum molestie. Aenean suscipit massa varius orci consectetur, a tempor ligula molestie. Morbi molestie ante vel volutpat pretium. Sed lobortis nulla id tellus malesuada convallis ut quis nisi. Quisque malesuada rutrum efficitur. Cras id pretium ante. Cras sollicitudin ligula ac hendrerit posuere. Donec eget mi lorem.</div>
            </section>
        );
    }
}

export default Sidebar
