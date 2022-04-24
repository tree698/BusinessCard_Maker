import firebaseAPP from './firebase';

class CardRepository {
  syncCards(userId, onUpdate) {
    const ref = firebaseAPP.database().ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCard(userId, card) {
    firebaseAPP.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseAPP.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
