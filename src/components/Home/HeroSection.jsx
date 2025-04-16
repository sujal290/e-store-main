import React from 'react'
import Slider from './Slider'
import Container from '@/components/Container'
import styles from '@/styles/home/HeroSection.module.css'
import images from '@/images/hero.png'


export default function HeroSection() {  
  return (  
    <Container>  
      <section className={styles.Hero}>  
        { /* Text Section */ }  
        <div className={styles.textSection}>  
          <h1>  
            One stop solution <span className='text-pink-500'>E-Store</span>  
          </h1>  
          <p>Discover the latest headphones, earphones, mobiles, tablets etc.</p>  
          <p>Exclusive deals just for you!</p>  
          <button className={styles.ctaButton}>Shop Now</button>  
        </div>  
        { /* Image Slider Section */ }  
        <div className={styles.imageSection}>  
          <img src="/images/hero.png" alt="Hero Image" />
        </div> 
        {/* <Slider />   */}
      </section>  
    </Container>  
  );  
}     