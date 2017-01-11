import React, { Component } from 'react';

import ThingService from '../services/ThingService.js';

class Thing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            value: props.thing.text
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleClick = (event) => {
        ThingService.deleteThing(this.props.id);
        event.preventDefault();
    }

    handleTextEdit = (event) => {
        this.setState((prevState, props) => {
            return { isEditing: true };
        });
        event.preventDefault();
    }

    handleTextSave = (event) => {
        ThingService.updateThing(this.props.id, this.state.value);
        this.setState({
            isEditing: false
        });
        event.preventDefault();
    }

    handleCheckbox = (event) => {
        this.setState({
            completed: !this.state.completed
        });
        ThingService.toggleCompleted(this.props.id, this.state.completed);
    }

    renderThing = () => {
        if (this.state.isEditing) {
            return (
                <span>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleTextSave}>
                        <i className='fa fa-floppy-o' aria-hidden='true' title='Save'></i>
                    </button>
                </span>
            )
        } else {
            return (
                <span>
                    <span className={this.props.thing.completed ? 'thing-title completed' : 'thing-title'}>{this.props.thing.text}</span>
                    <button onClick={this.handleTextEdit}>
                        <i className='fa fa-pencil' aria-hidden='true' title='Edit'></i>
                    </button>
                </span>
            );
        }
    }

    render() {
        return (
            <li className='thing' draggable='true'>
                <input type='checkbox' checked={this.props.thing.completed} onClick={this.handleCheckbox} />
                {this.renderThing()}
                <button onClick={this.handleClick}>
                    <i className='fa fa-trash' aria-hidden='true' title='Delete'></i>
                </button>
            </li>
        );
    }
}

export default Thing
