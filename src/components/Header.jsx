import React from 'react';

import styles from '../styles/Header/Header.module.css';

import Container from './Container';
 

export default function Header() {  
  return (  
    <header className={`${styles.header} py-3 px-1 shadow`}>  
      <Container className="flex justify-between items-center">  
        {/* Logo */}  
        <Link href="/">  
          <div className="flex items-center">  
            <span className="text-pink-500 font-bold text-4xl">E-Store<b className="text-black">.</b></span>  
          </div>  
        </Link>  

        {/* Search Bar */}  
        <div className={`${styles.searchBar} flex items-center`}>  
          <input  
            type="text"  
            placeholder="Search for products..."  
            className={styles.searchInput}  
          />  
          <button className={styles.searchButton}>  
            <FiSearch size={18} />  
          </button>  
        </div>  
      </Container>  
    </header>  
  );  
}  

