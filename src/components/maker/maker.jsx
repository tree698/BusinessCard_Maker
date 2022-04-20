import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'ellie',
      company: 'Samsung',
      theme: 'dark',
      title: 'Softwate Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },

    '2': {
      id: '2',
      name: 'ellie2',
      company: 'Samsung',
      theme: 'light',
      title: 'Softwate Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },

    '3': {
      id: '3',
      name: 'ellie3',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Softwate Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
  });

  const navigator = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigator('/');
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          className={styles.editor}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview className={styles.preview} cards={cards} />
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Maker;
