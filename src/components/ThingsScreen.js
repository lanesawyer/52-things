import React from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import ThingList from './ThingList.js';
import CategoryForm from './CategoryForm.js';

var ThingsScreen = React.createClass({
    mixins: [ReactFireMixin],
    componentWillMount: function () {
        var ref = firebase.database().ref('categories/' + firebase.auth().currentUser.uid).orderByChild('order');
        this.bindAsArray(ref, 'categories');
    },
    componentWillUnmount: function () {
        this.firebaseRef.off();
    },
    render: function () {
        return (
            <section className='row'>
                {this.state.categories.map(category => {
                    return <ThingList key={category['.key']} categoryId={category['.key']} categoryTitle={category.category} />
                })}
                <CategoryForm />
            </section>
        );
    }
});

export default ThingsScreen;
