import React, { Component } from 'react';

import CategoryService from '../services/CategoryService.js';

class Category extends Component {
    handleClick = (event) => {
        CategoryService.deleteCategory(this.props.id);
        event.preventDefault();
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
