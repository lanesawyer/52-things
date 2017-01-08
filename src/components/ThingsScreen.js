import React from 'react';
import ReactFireMixin from 'reactfire';

import CategoryService from '../services/CategoryService.js';
import ThingList from './ThingList.js';
import CategoryForm from './CategoryForm.js';

var ThingsScreen = React.createClass({
    mixins: [ReactFireMixin],
    componentWillMount: function () {
        var ref = CategoryService.getCategories();
        if (ref) {
            this.bindAsArray(ref, 'categories');
        } else {
            this.setState({categories: []});
        }
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
