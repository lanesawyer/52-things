import React, { Component } from 'react';

import firebase from "firebase";

class Thing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        firebase.database().ref('things').child(this.props.id).remove();
        e.preventDefault();
    }

    render() {
        return (
            <li className="thing">
                {this.props.text}
                <button onClick={this.handleClick}>Delete</button>
            </li>
        );
    }
}

export default Thing
