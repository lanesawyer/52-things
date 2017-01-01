import React from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import Thing from './Thing.js';

var ExampleComponent = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function () {
        return {
            items: [1, 2, 3]
        }
    },
    componentWillMount: function () {
        var ref = firebase.database().ref("items");
        this.bindAsArray(ref, "items");
    },
    render: function () {
        return (
            <ul>
                {this.state.items.map(function(item, index) {
                return <Thing text={item['text']} />;
                })}
            </ul>
        );
    }
});

export default ExampleComponent;