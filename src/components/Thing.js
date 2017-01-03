import React, { Component } from 'react';

import firebase from "firebase";

class Thing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleClick(e) {
        firebase.database().ref('things').child(this.props.id).remove();
        e.preventDefault();
    }

    handleCheckbox(e) {
        this.setState({
            completed: !this.state.completed
        });
        //TODO: Update on Firebase
    }

    render() {
        return (
            <li className='thing'>
                <input type='checkbox' onClick={this.handleCheckbox} />
                <div className={this.state.completed ? 'thing-title completed' : 'thing-title'}>{this.props.text}</div>
                <button onClick={this.handleClick}>Delete</button>
            </li>
        );
    }
}

export default Thing
