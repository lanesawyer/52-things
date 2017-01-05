import firebase from 'firebase';
import Constants from '../Constants.js';

class CategoryService {
    constructor() {

    }

    addCategory = (category) => {
        var user = this.getCurrentUser();
        firebase.database().ref('category/' + user.uid).push({
            category: category
        });
    }

    deleteCategory = (categoryId) => {
        var user = this.getCurrentUser();
        firebase.database().ref('category/' + user.uid).child(categoryId).remove();
    }
}

export default new CategoryService();
