import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const navigator = useNavigate();
  const goToMaker = (userId) => {
    navigator({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => user && goToMaker(user.uid));
  });

  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.logo}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.providers}>
          <li className={styles.provider}>
            <button className={styles.btn} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.provider}>
            <button className={styles.btn} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
