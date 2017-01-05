import React from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import Category from './Category.js';
import Thing from './Thing.js';
import ThingForm from './ThingForm.js';

var ThingList = React.createClass({
    mixins: [ReactFireMixin],
    componentWillMount: function () {
        var user = firebase.auth().currentUser;
        var ref = firebase.database().ref('things/' + user.uid).orderByChild('category').equalTo(this.props.category);
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
                <ThingForm category={this.props.category} />
            </section>
        );
    }
});

export default ThingList;