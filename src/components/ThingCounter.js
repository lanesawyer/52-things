import React, { Component } from 'react';

//import firebase from "firebase";

class ThingCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            things: 0
        };
    }

    render() {

        // Get current count of total number of things

        return (
            <div className='thing-counter'>
                {this.state.things}
            </div>
        );
    }
}

export default ThingCounter
