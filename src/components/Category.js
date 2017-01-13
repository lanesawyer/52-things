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
                 <button className='float-right' onClick={this.handleClick}>
                    <i className='fa fa-trash' aria-hidden='true' title='Delete'></i>
                </button>
            </div>
        );
    }
}

export default Category
