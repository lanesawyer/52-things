import React, { Component } from 'react';

import ThingService from '../services/ThingService.js';

class Thing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            value: props.thing.text
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleTextEdit = this.handleTextEdit.bind(this);
        this.handleTextSave = this.handleTextSave.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleClick(e) {
        ThingService.deleteThing(this.props.id);
        e.preventDefault();
    }

    handleTextEdit = (e) => {
        this.setState((prevState, props) => {
            return { isEditing: true };
        });
        e.preventDefault();
    }

    handleTextSave = (e) => {
        ThingService.updateThing(this.props.id, this.state.value);
        this.setState({
            isEditing: false
        });
        e.preventDefault();
    }

    handleCheckbox(e) {
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
                    <button onClick={this.handleTextSave}>Save</button>
                </span>
            )
        } else {
            return (
                <span>
                    <span className={this.props.thing.completed ? 'thing-title completed' : 'thing-title'}>{this.props.thing.text}</span>
                    <button onClick={this.handleTextEdit}>Edit</button>
                </span>
            );
        }
    }

    render() {
        return (
            <li className='thing' draggable='true'>
                <input type='checkbox' checked={this.props.thing.completed} onClick={this.handleCheckbox} />
                {this.renderThing()}
                <button onClick={this.handleClick}>Delete</button>
            </li>
        );
    }
}

export default Thing
