import React from 'react';
import ReactFireMixin from 'reactfire';

import ThingService from '../services/ThingService.js';
import Category from './Category.js';
import Thing from './Thing.js';
import ThingForm from './ThingForm.js';

var ThingList = React.createClass({
    mixins: [ReactFireMixin],
    componentWillMount: function () {
        const ref = ThingService.getThings(this.props.categoryId);
        this.bindAsArray(ref, 'things');
    },
    componentWillUnmount: function () {
        this.firebaseRef.off();
    },
    render: function () {
        return (
            <section className='container-item'>
                <Category title={this.props.categoryTitle} />
                <ul>
                    {this.state.things.map(item => <Thing key={item['.key']} id={item['.key']} thing={item} />)}
                </ul>
                <ThingForm category={this.props.categoryId} />
            </section>
        );
    }
});

export default ThingList;