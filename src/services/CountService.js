import firebase from 'firebase';
import AuthService from './AuthService.js';

const countKey = 'counts/';
const categoryKey = '/categories';
const thingKey = '/things';

class CountService {

    getNumberOfCategories = () => {
        const user = AuthService.getCurrentUser();
        if (user) {
            return firebase.database().ref(countKey + user.uid + categoryKey);
        }
        return 0;
    }

    
    addCategory = () => {
        const user = AuthService.getCurrentUser();
        if(user) {
            var categoryCountRef = firebase.database().ref(countKey + user.uid)
            categoryCountRef.once('value').then((snapshot) => {;
                categoryCountRef.update({
                    categories: snapshot.val().categories + 1
                })
            });
        }
    }

    deleteCategory = () => {
        const user = AuthService.getCurrentUser();
        if(user) {
            var categoryCountRef = firebase.database().ref(countKey + user.uid)
            categoryCountRef.once('value').then((snapshot) => {;
                categoryCountRef.update({
                    categories: snapshot.val().categories - 1
                })
            });
        }
    }
    
    getNumberOfThings = () => {
        var user = AuthService.getCurrentUser();
        if (user) {
            return firebase.database().ref(countKey + user.uid + thingKey);
        }
        return 0;
    }

    addThing = () => {
        var user = AuthService.getCurrentUser();
        if (user) {
            var thingCountRef = firebase.database().ref(countKey + user.uid);
            thingCountRef.once('value').then((snapshot) => {
                thingCountRef.update({
                    things: snapshot.val().things + 1
                })
            });
        }
    }

    deleteThing = () => {
        const user = AuthService.getCurrentUser();
        if(user) {
            var categoryCountRef = firebase.database().ref(countKey + user.uid)
            categoryCountRef.once('value').then((snapshot) => {;
                categoryCountRef.update({
                    things: snapshot.val().things - 1
                })
            });
        }
    }

}

export default new CountService();
