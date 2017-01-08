import React, { Component } from 'react';

import ThingService from '../services/ThingService.js';

class Thing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleClick(e) {
        ThingService.deleteThing(this.props.id);
        e.preventDefault();
    }

    handleCheckbox(e) {
        this.setState({
            completed: !this.state.completed
        });
        ThingService.toggleCompleted(this.props.id, this.state.completed);
    }

    render() {
        return (
            <li className='thing' draggable='true'>
                <input type='checkbox' checked={this.props.thing.completed} onClick={this.handleCheckbox} />
                <div className={this.props.thing.completed ? 'thing-title completed' : 'thing-title'}>{this.props.thing.text}</div>
                <button onClick={this.handleClick}>Delete</button>
            </li>
        );
    }
}

export default Thing
