import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
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

  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <div className={styles.container}>
        <Editor className={styles.editor} />
        <Preview className={styles.preview} />
      </div>
      <Footer className={styles.footer} />
    </section>
  );
};

export default Maker;
