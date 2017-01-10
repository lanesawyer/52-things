import firebase from 'firebase';
import AuthService from './AuthService.js';

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
        firebase.database().ref(thingKey + user.uid).push({
            text: text,
            category: category
        });
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
        firebase.database().ref(thingKey + user.uid).child(thingId).remove();
    }
}

export default new ThingService();
