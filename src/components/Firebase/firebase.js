// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebaseui";
import firebaseConfig from './config';
import * as firebase from 'firebase';


class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
    
}

new Firebase();

export default Firebase;