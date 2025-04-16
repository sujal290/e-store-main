import React from 'react';

import styles from '../styles/Header/Header.module.css';

import Container from './Container';
import Footer from './Footer';
import {FiSearch} from 'react-icons/fi';
import {FiShoppingCart} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';

 

export default function Header() {  
  return (  
    <header className={`${styles.header} py-3 px-1 shadow`}>  
      <Container className="flex justify-between ">  
    
          <div className="flex items-center ml-4">  
            <span className="text-gray-500 font-semibold text-xl">E-commerce</span> 
          </div>
          {/* SearchBar */}

          <div className={`${styles.searchBar} flex items-center ml-4`}>
            
            <input type="text" placeholder="Search.." className="border border-gray-300 rounded px-4 py-2" />
            <button className="bg-blue-500 text-white rounded px-4 py-2 ml-2">
              <FiSearch size={20} />  
            </button>  
          </div> 

          {/* Navbar */}
          <Navbar />
        

        
      </Container>  
    </header>
 
  );  

}  
  
 
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <Container className="flex justify-between items-center">
        {/* Nav Links */}
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Products</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>

        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FiSearch size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FiShoppingCart size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FiUser size={20} />
          </a>
        </div>
      </Container>
    </nav>
  );
};


