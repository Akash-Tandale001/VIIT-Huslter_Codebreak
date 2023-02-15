import React from 'react'
import HomeItems from './HomeItems'
import './HomeCard.css'

function HomeCards() {
    return (
      <div className='cards'>
        <h1>Pick the nearest destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <HomeItems
                src='images/img-11.png'
                text='Explore the Parts AVTR from Ashok Leyland is transforming the business to next level'
                label='Spares Catalog'
                path='/services'
              />
              <HomeItems
                src='images/img-12.png'
                text="Ashok Leyland, India's market leader in MHCV buses is the world's fourth largest bus manufacturer in terms of volume"
                label='Buses'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <HomeItems
                src='images/img-13.png'
                text='Ashok Leyland manufactures Defence vehicles '
                label='Defence'
                path='/services'
              />
              <HomeItems
                src='images/img-4.jpg'
                text=' AVTR from Ashok Leyland is transforming the business to next level. '
                label='Suspention'
                path='/products'
              />
              <HomeItems
                src='images/img-8.jpeg'
                text='AVTR from Ashok Leyland is transforming the business to next level. '
                label='Body Parts'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
export default HomeCards