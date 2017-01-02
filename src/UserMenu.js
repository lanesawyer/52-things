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
        return (
            <div className="auth">
                {this.props.userName}
            </div>
        );
    }
}

export default UserMenu