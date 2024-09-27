import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navegation}>
            <div className={styles.nav}>
              <Link to="/" className={styles.btn}>HOME</Link>
              <Link to="/conteudos" className={styles.btn}>CONTEUDOS</Link>
              <Link to="/contato" className={styles.btn}>CONTATO</Link>
            </div>
        </nav>
    </header>
  );
}

export default Header;
