import firebase from 'firebase';
import AuthService from './AuthService.js';
import CountService from './CountService.js';

const categoryKey = 'categories/';

class CategoryService {

    getCategories = () => {
        const user = AuthService.getCurrentUser();
        if (user) {
            return firebase.database().ref(categoryKey + user.uid).orderByChild('order');
        }
        return null;
    }

    addCategory = (category) => {
        const user =  AuthService.getCurrentUser();
        var userCategoryRef = firebase.database().ref(categoryKey + user.uid);
        userCategoryRef.once('value').then(function(snapshot) {
            CountService.addCategory();
            const numCategories = CountService.getNumberOfCategories();

            userCategoryRef.push({
                category: category,
                order: numCategories + 1
            });
        });
    }

    deleteCategory = (categoryId) => {
        const user =  AuthService.getCurrentUser();
        var userCategoryRef = firebase.database().ref(categoryKey + user.uid);
        userCategoryRef.child(categoryId).remove();

        CountService.deleteCategory();
    }
}

export default new CategoryService();
