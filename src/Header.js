import React, { Component } from 'react';
import firebase from "firebase";

import UserMenu from './UserMenu.js';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <div className="header">
                <div className="title">52 Things</div>
                <UserMenu userName="HEyo" />
            </div>
        );
    }
}

export default Header