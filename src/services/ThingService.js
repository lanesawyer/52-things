import firebase from 'firebase';
import AuthService from './AuthService.js';
import CountService from './CountService.js';

const thingKey = 'things/';

class ThingService {

    getThings = (categoryId) => {
        var user = AuthService.getCurrentUser();
        if (user) {
            return firebase.database().ref(thingKey + user.uid).orderByChild('category').equalTo(categoryId);
        }
        return null;
    }

    getNumberOfThings = () => {
        var user = AuthService.getCurrentUser();
        if (user) {
            return firebase.database().ref(thingKey + user.uid + '/count');
        }
        return 0;
    }

    addThing = (text, category) => {
        var user = AuthService.getCurrentUser();
        var userThingRef = firebase.database().ref(thingKey + user.uid);
        userThingRef.push({
            text: text,
            category: category
        });

        CountService.addThing();
    }

    updateThing = (thingId, newText) => {
        var user = AuthService.getCurrentUser();
        firebase.database().ref(thingKey + user.uid).child(thingId).update({
            text: newText
        });
    }

    toggleCompleted = (thingId, isCompleted) => {
        var user = AuthService.getCurrentUser();
        firebase.database().ref(thingKey + user.uid).child(thingId).update({
            completed: !isCompleted
        });
    }

    deleteThing = (thingId) => {
        var user = AuthService.getCurrentUser();
        var userThingRef = firebase.database().ref(thingKey + user.uid);
        userThingRef.child(thingId).remove();

        CountService.deleteThing();
    }

    deleteThingsInCategory = (categoryId) => {
        var user = AuthService.getCurrentUser();
        var userThingCategoryRef = firebase.database().ref(thingKey + user.uid).orderByChild('category').equalTo(categoryId);

        userThingCategoryRef.once('value', function(snapshot) {
            snapshot.forEach(child => {
                child.ref.remove();
                CountService.deleteThing();
            });
        });
    }
}

export default new ThingService();
