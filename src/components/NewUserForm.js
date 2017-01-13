import React, { Component } from 'react';

import AuthService from '../services/AuthService.js';

class NewUserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = (event) => {
        AuthService.createUser(this.state.name, this.state.email, this.state.password);

        event.preventDefault();
    }

    render() {
        return (
            <section className='container-item'>
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                    <label>Email:</label>
                    <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
                    <label>Password:</label>
                    <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
                    <input type='submit' value='Create Account' />
                </form>
            </section>
        );
    }
}

export default NewUserForm
