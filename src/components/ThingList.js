import React from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import Category from './Category.js';
import Thing from './Thing.js';

var ThingList = React.createClass({
    //mixins: [ReactFireMixin],
    getInitialState: function () {
        return {
            things: [
                {key: '1', text: 'hey'},
                {key: '2', text: 'hi'},
                {key: '3', text: 'this is a little longer'}
            ]
        }
    },
    componentWillMount: function () {
        var ref = firebase.database().ref("things"); //search for category here
        this.bindAsArray(ref, "things");
    },
    render: function () {
        return (
            <div>
                <Category title={this.props.category} />
                <ul>
                    {this.state.things.map(function(item, index) {
                    return <Thing key={item['.key']} id={item['.key']} text={item['text']} />;
                    })}
                </ul>
            </div>
        );
    }
});

export default ThingList;