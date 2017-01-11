import firebase from 'firebase';
import AuthService from './AuthService.js';

const categoryKey = 'categories/';

class CategoryService {

    getCategories = () => {
        var user = AuthService.getCurrentUser();
        if (user) {
            return firebase.database().ref(categoryKey + user.uid).orderByChild('order');
        }
        return null;
    }

    addCategory = (category) => {
        var user =  AuthService.getCurrentUser();
        var userCategoryRef = firebase.database().ref(categoryKey + user.uid);
        userCategoryRef.once('value').then(function(snapshot) {
            var oldCount = snapshot.val().count;
            userCategoryRef.update({
                count: oldCount + 1
            })

            userCategoryRef.push({
                category: category,
                order: oldCount + 1
            });
        });


    }

    deleteCategory = (categoryId) => {
        var user =  AuthService.getCurrentUser();
        var userCategoryRef = firebase.database().ref(categoryKey + user.uid);
        userCategoryRef.child(categoryId).remove();

        userCategoryRef.once('value').then(function(snapshot) {
            var oldCount = snapshot.val().count;
            userCategoryRef.update({
                count: oldCount - 1
            })
        });
    }
}

export default new CategoryService();
