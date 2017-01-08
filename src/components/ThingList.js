import React from 'react';
import ReactFireMixin from 'reactfire';

import ThingService from '../services/ThingService.js';
import Category from './Category.js';
import Thing from './Thing.js';
import ThingForm from './ThingForm.js';

var ThingList = React.createClass({
    mixins: [ReactFireMixin],
    componentWillMount: function () {
        this.firebaseRef = ThingService.getThings(this.props.categoryId);
        if (this.firebaseRef) {
            this.bindAsArray(this.firebaseRef, 'things');
        } else {
            this.setState({things: []});
        }
    },
    componentWillUnmount: function () {
        this.firebaseRef.off();
    },
    render: function () {
        return (
            <section className='container-item'>
                <Category id={this.props.categoryId} title={this.props.categoryTitle} />
                <ul>
                    {this.state.things.map(item => <Thing key={item['.key']} id={item['.key']} thing={item} />)}
                </ul>
                <ThingForm category={this.props.categoryId} />
            </section>
        );
    }
});

export default ThingList;
