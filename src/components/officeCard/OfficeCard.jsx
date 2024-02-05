import React from 'react'
import "./officeCard.css"

export const OfficeCard = ({ card }) => {
  return (
    <div className='office-card'>
        <img className='office-image' src={card.image} alt={card.title} />
        <div className='card-info'>
            <img src="images/officeCards/numberOfOffices.svg" alt="Number of offices" />
            <span>{card.numberOfOffices} Offices</span>
            <img src="images/officeCards/area.svg" alt="Area" />
            <span>{card.area} sqm</span>
        </div>
        <div className='card-bottom'>
            <p className='office-title'>{card.title}</p>
            <p className='office-price'>{card.price}</p>
        </div>
    </div>
  )
}
