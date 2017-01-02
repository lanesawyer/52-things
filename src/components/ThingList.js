import React from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import Thing from './Thing.js';

var ThingList = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function () {
        return {
            things: []
        }
    },
    componentWillMount: function () {
        var ref = firebase.database().ref("things");
        this.bindAsArray(ref, "things");
    },
    render: function () {
        return (
            <ul>
                {this.state.things.map(function(item, index) {
                return <Thing key={item['.key']} id={item['.key']} text={item['text']} />;
                })}
            </ul>
        );
    }
});

export default ThingList;