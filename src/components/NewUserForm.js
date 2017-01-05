import React, { Component } from 'react';
import firebase from 'firebase';

class NewUserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('error:' + errorCode + ' ' + errorMessage);
        });

        event.preventDefault();
    }

    render() {
        return (
            <section className='container-item'>
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit}>
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
