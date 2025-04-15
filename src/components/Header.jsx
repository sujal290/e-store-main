import React from 'react';

import styles from '../styles/Header/Header.module.css';

import Container from './Container';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <h1>Logo</h1>
        </div>
        <nav className={styles.headerNav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </Container>

      <div className={styles.headerSearch}>
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>

      <div className={styles.headerCart}>
        <a href="#">Cart</a>
      </div>

      <div className={styles.headerUser}>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>

      <div className={styles.headerLanguage}>
        <select>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <div className={styles.headerCurrency}>
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>
      </div>

      <div className={styles.headerTheme}>
        <button>Toggle Theme</button>
      </div>

      <div className={styles.headerNotifications}>
        <a href="#">Notifications</a>
      </div>

      <div className={styles.headerProfile}>
        <a href="#">Profile</a>
      </div>

      <div className={styles.headerWishlist}>
        <a href="#">Wishlist</a>
      </div>
    </header>
  );
}
