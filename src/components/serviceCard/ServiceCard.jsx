import React from 'react'
import "./serviceCard.css"
export const ServiceCard = ({card}) => {
  return (
    <div className='service-card'>
        <img src={card.image} alt="Card image" />
        <h3 className='card-title'>{card.title}</h3>
        <p className='card-text'>{card.text}</p>
    </div>
  )
}
