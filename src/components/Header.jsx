import React from 'react';

import styles from '../styles/Header/Header.module.css';

import Container from './Container';
 

export default function Header() {  
  return (  
    <header className={`${styles.header} py-3 px-1 shadow`}>  
      <Container className="flex justify-between items-center">  
      
          <div className="flex items-center">  
            <span className="text-pink-500 font-bold text-4xl">E-Store....<b 
            className="text-black">.</b></span>  
          </div>  
        

        
      </Container>  
    </header>  
  );  
}  

