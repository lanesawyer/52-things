import firebase from 'firebase';
import Constants from '../Constants.js';

class ThingsService {
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
            var ref = firebase.database().ref('things/' + user.uid).orderByChild('category').equalTo(this.props.category);
            this.things = ref;
        }
    }

    getCurrentUser = () => {
        return firebase.auth().currentUser;
    }

    getThings = () => {
        return this.things;
    }
}

export default new ThingsService();
