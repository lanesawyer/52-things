import React, { Component } from 'react';

import CategoryService from '../services/CategoryService.js';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            value: props.title
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleEdit = (event) => {
        this.setState((prevState, props) => {
            return { isEditing: true };
        });
        event.preventDefault();
    }

    handleSave = (event) => {
        CategoryService.updateCategory(this.props.id, this.state.value);
        this.setState({
            isEditing: false
        });
        event.preventDefault();
    }

    handleDelete = (event) => {
        CategoryService.deleteCategory(this.props.id);
        event.preventDefault();
    }

    renderCategory = () => {
        if (this.state.isEditing) {
            return (
                <div className="row">
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleSave}>
                        <i className='fa fa-floppy-o' aria-hidden='true' title='Save'></i>
                    </button>
                    <button onClick={this.handleDelete}>
                        <i className='fa fa-trash' aria-hidden='true' title='Delete'></i>
                    </button>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <div className="category-title">{this.props.title}</div>
                    <button onClick={this.handleEdit}>
                        <i className='fa fa-pencil' aria-hidden='true' title='Edit'></i>
                    </button>
                    <button onClick={this.handleDelete}>
                        <i className='fa fa-trash' aria-hidden='true' title='Delete'></i>
                    </button>
                </div>
            );
        }
    }

    render() {
        return this.renderCategory();
    }
}

export default Category
