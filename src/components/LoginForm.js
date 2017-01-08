import React, { Component } from 'react';

import AuthService from '../services/AuthService.js';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
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
        AuthService.login(this.state.email, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <section className='container-item'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
                    <label>Password:</label>
                    <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
                    <input type='submit' value='Login' />
                </form>
            </section>
        );
    }
}

export default LoginForm
