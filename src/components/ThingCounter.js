import React from 'react';
import ReactFireMixin from 'reactfire';

import CountService from '../services/CountService.js';

var ThingCounter = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
        return {
            thingCount: 0,
            categoryCount: 0
        };
    },
    componentWillMount: function () {
        this.thingsRef = CountService.getNumberOfThings();
        if (this.thingsRef) {
            this.bindAsObject(this.thingsRef, 'thingCount');
        } else {
            this.setState({thingCount: 0});
        }

        this.categoriesRef = CountService.getNumberOfCategories();
        if (this.categoriesRef) {
            this.bindAsObject(this.categoriesRef, 'categoryCount');
        } else {
            this.setState({categoryCount: 0});
        }
    },
    componentWillUnmount: function () {
        this.thingsRef.off();
    },
    render: function () {
        return (
            <h2 className='thing-counter'>
                <div>{this.state.thingCount['.value']} / 52</div>
                <div>in {this.state.categoryCount['.value']} categories</div>
            </h2>
        );
    }
});

export default ThingCounter
