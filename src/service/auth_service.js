import firebase from 'firebase';
import firebaseAPP from './firbase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseAPP.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
