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

    login = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Login error:' + errorCode + ' ' + errorMessage);
        });
    }

    logout = () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            // An error happened.
        });
    }

    createUser = (name, email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) =>{
            return user.updateProfile({
                displayName: name
            }).then(function() {
                // Update successful.
            }, function(error) {
                // An error happened.
            });
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('User creation error:' + errorCode + ' ' + errorMessage);
        });        
    }

    getCurrentUser = () => {
        return firebase.auth().currentUser;
    }

    getGravitarUrl = (email) => {
        return 'https://www.gravatar.com/avatar/' + md5(email);
    }
}

export default new AuthService();
