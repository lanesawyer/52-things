import firebase from 'firebase';
import AuthService from './AuthService.js';

const categoryKey = 'categories/';

class CategoryService {

    getCategories = () => {
        var user = AuthService.getCurrentUser();
        return firebase.database.ref(categoryKey + user.uid);
    }

    addCategory = (category) => {
        var user =  AuthService.getCurrentUser();
        firebase.database().ref(categoryKey + user.uid).push({
            category: category
        });
    }

    deleteCategory = (categoryId) => {
        var user =  AuthService.getCurrentUser();
        firebase.database().ref(categoryKey + user.uid).child(categoryId).remove();
    }
}

export default new CategoryService();
