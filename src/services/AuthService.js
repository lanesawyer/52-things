import firebase from 'firebase';
import md5 from 'md5';
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

    getGravitarUrl = (email) => {
        return 'https://www.gravatar.com/avatar/' + md5(email);
    }
}

export default new AuthService();
