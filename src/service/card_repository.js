import { getDatabase, ref, remove, set, onValue, off } from 'firebase/database';

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }

  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    // off함수를 호출하는 함수
    return () => off(query);
  }
}

export default CardRepository;
