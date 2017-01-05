import firebase from 'firebase';
import Constants from '../Constants.js';

const thingKey = 'things/';

class ThingService {
    constructor() {
        var config = {
            apiKey: Constants.apiKey,
            authDomain: Constants.authDomain,
            databaseURL: Constants.databaseUrl,
            storageBucket: Constants.storageBucket,
            messagingSenderId: Constants.messagingSenderId
        };

        firebase.initializeApp(config);

        var user = this.getCurrentUser();
        if (user) {
            var ref = firebase.database().ref(thingKey + user.uid).orderByChild('category').equalTo(this.props.category);
            this.things = ref;
        }
    }

    getCurrentUser = () => {
        return firebase.auth().currentUser;
    }

    getThings = () => {
        return this.things;
    }

    addThing = (text, category) => {
        var user = this.getCurrentUser();
        firebase.database().ref(thingKey + user.uid).push({
            text: text,
            category: category
        });
    }

    toggleCompleted = (thingId, isCompleted) => {
        var user = this.getCurrentUser();
        firebase.database().ref(thingKey + user.uid).child(thingId).update({
            completed: !isCompleted
        });
    }

    deleteThing = (thingId) => {
        var user = this.getCurrentUser();
        firebase.database().ref(thingKey + user.uid).child(thingId).remove();
    }
}

export default new ThingService();
