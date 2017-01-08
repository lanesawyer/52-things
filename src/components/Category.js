import React, { Component } from 'react';

import CategoryService from '../services/CategoryService.js';

class Category extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        CategoryService.deleteCategory(this.props.id);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        );
    }
}

export default Category
