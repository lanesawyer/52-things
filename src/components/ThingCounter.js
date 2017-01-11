import React from 'react';
import ReactFireMixin from 'reactfire';

import ThingService from '../services/ThingService.js';

var ThingCounter = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
        return {
            count: 0
        };
    },
    componentWillMount: function () {
        this.firebaseRef = ThingService.getNumberOfThings();
        if (this.firebaseRef) {
            this.bindAsObject(this.firebaseRef, 'count');
        } else {
            this.setState({count: 0});
        }
    },
    componentWillUnmount: function () {
        this.firebaseRef.off();
    },
    render: function () {
        return (
            <h2 className='thing-counter'>
                {this.state.count['.value']} / 52
            </h2>
        );
    }
});

export default ThingCounter
