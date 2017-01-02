import React, { Component } from 'react';
import firebase from "firebase";

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <h1>Category</h1>
        );
    }
}

export default Category