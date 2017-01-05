import firebase from 'firebase';
import Constants from '../Constants.js';

const categoryKey = 'categories/';

class CategoryService {
    constructor() {

    }

    getCategories = () => {
        var user = firebase.auth().currentUser;
        return firebase.database.ref(categoryKey + user.uid);
    }

    addCategory = (category) => {
        var user = firebase.auth().currentUser;
        firebase.database().ref(categoryKey + user.uid).push({
            category: category
        });
    }

    deleteCategory = (categoryId) => {
        var user = this.getCurrentUser();
        firebase.database().ref(categoryKey + user.uid).child(categoryId).remove();
    }
}

export default new CategoryService();
