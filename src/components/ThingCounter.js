import React from 'react';
import ReactFireMixin from 'reactfire';

import ThingService from '../services/ThingService.js';

var ThingCounter = React.createClass({
    mixins: [ReactFireMixin],
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
            <div className='thing-counter'>
                {this.state.things}
            </div>
        );
    }
});

export default ThingCounter
