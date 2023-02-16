import React from 'react'
import HomeItems from './HomeItems'
import './HomeCard.css'

function HomeCards() {
    return (
      <div className='cards'>
        <div className='marquee'>
        <div className='marqueeContentContainer'>
          <h1> Koi Manzil Dur Nahi!! </h1>
          <h1> We Focus On
          Safety First
          and forever!! </h1>
          <h1> Enhancing Lives Through Mobility!! </h1>
          
        </div>
        
        </div>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <HomeItems
                src='images/img-11.png'
                text='Explore the Parts AVTR from Ashok Leyland is transforming the business to next level'
                label='Spares Catalog'
                path='#'
              />
              <HomeItems
                src='images/img-12.png'
                text="Ashok Leyland, India's market leader in MHCV buses is the world's fourth largest bus manufacturer in terms of volume"
                label='Buses'
                path='#'
              />
            </ul>
            <ul className='cards__items'>
              <HomeItems
                src='images/img-13.png'
                text='Ashok Leyland manufactures Defence vehicles '
                label='Defence'
                path='#'
              />
              <HomeItems
                src='images/img-4.jpg'
                text=' AVTR from Ashok Leyland is transforming the business to next level. '
                label='Suspention'
                path='#'
              />
              <HomeItems
                src='images/img-8.jpeg'
                text='AVTR from Ashok Leyland is transforming the business to next level. '
                label='Body Parts'
                path='#'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
export default HomeCards