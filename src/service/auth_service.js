import firebase from 'firebase';
import firebaseAPP from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseAPP.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(userChange) {
    firebase.auth().onAuthStateChanged((user) => userChange(user));
  }
}

export default AuthService;
