"use client"
import React from 'react'
import styles from '@/styles/home/HeroSection.module.css'
import Image from 'next/image';
 

const images = [  
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg',  
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WJlhbLS_SL1500_-jpg',  
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg',  
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg45Mx-L_SL1500_-jpg',  
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg'  
];  

export default function Slider() {
  return (  
    <div className={styles.sliderContainer}>  
      <div className={styles.slider}> 
        {
          images.map((image, index) => {
            return (
            <div  key={"slider"+index} className=''> 
            <images/>
          </div>  
          )}
        )
        } 
        
      </div>  
    </div> 
    
  );  
}
