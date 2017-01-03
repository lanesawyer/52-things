import React, { Component } from 'react';
import firebase from "firebase";

class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

export default Category