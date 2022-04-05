import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent);
  };

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
              GitHub
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
