import firebase from 'firebase';

class ThingsService {
    constructor() {
        var user = firebase.auth().currentUser;
        var ref = firebase.database().ref('things/' + user.uid).orderByChild('category').equalTo(this.props.category);
        this.bindAsArray(ref, 'things');

        this.things = []
    }
}
