import React, { Component } from 'react';

class Thing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <li className="thing">{this.props.text}</li>
        );
    }
}

export default Thing