import firebase from 'firebase';
import Constants from '../Constants.js';

class AuthService {
    constructor() {
        var config = {
            apiKey: Constants.apiKey,
            authDomain: Constants.authDomain,
            databaseURL: Constants.databaseUrl,
            storageBucket: Constants.storageBucket,
            messagingSenderId: Constants.messagingSenderId
        };

        firebase.initializeApp(config);
    }

    getCurrentUser = () => {
        return firebase.auth().currentUser;
    }
}

export default new AuthService();
