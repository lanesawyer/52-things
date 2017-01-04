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
    render: function () {
        return (
            <div>
                <Category title={this.props.categoryTitle} />
                <ul>
                    {this.state.things.map(item => <Thing key={item['.key']} id={item['.key']} text={item.text} category={item.category} />)}
                </ul>
                <ThingForm category={this.props.category} />
            </div>
        );
    }
});

export default ThingList;