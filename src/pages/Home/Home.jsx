import React from 'react'
import "./home.css"
import "./media.css"
import { ServiceCard } from '../../components/serviceCard/ServiceCard'
import { cardsData } from '../../data/cardsData'
import { officeData } from "../../data/officeData"
import { useState } from 'react'
import { OfficeCard } from '../../components/officeCard/OfficeCard'
export const Home = () => {
    const itemsPerPage = 4;
    const [visibleRange, setVisibleRange] = useState(itemsPerPage);
    const [officesRange, setOfficesRange] = useState(6);

    const [elementSelected, setElementSelected] = useState(0);
    const handleShowMore = (id) => {
        setVisibleRange((prevRange) => prevRange + itemsPerPage);
      setElementSelected(id);
    };
    
    const loadMore = () => {
        setOfficesRange((prevRange) => prevRange + 6);
      };

  return (
   <div className="container">
    <div className="hero-wrapper">
    <div className='hero'>
        <div className='hero-center'>
            <h1 className='hero-title'>Mediation of modern Workspaces around the Globe</h1>
            <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='hero-input'>
            <input type="text" placeholder='Insert your post code or adress here'/>
            <button className='button hero-button'><img src="images/Loop.svg" alt="Loop" /> Search</button>
            </div>
        </div>
    </div>
    </div>
    <div className="clients-wrapper flex-center">
        <div>
        <h2 className='home-header trusted-by'>Trusted by</h2>
            <div className="client-logos">
            <div>
            <img src="images/ClientLogo1.png" alt="Client" />
        </div>
        <div>
            <img src="images/ClientLogo2.png" alt="Client" />
        </div>
        <div>
            <img src="images/ClientLogo3.png" alt="Client" />
        </div>
        <div>
            <img src="images/ClientLogo4.png" alt="Client" />
        </div>
            </div>
        </div>
    </div>
    <div className='straight-line'></div>
    <div className='service-offer-wrapper'>
        <div className="service-sides">
            <div className='left-side'>
                <span>SERVICES</span>
                <h3>What do we offer</h3>
                <p className='home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.</p>
            </div>
            <div className='right-side'>
                <button className="button">See more</button>
            <ul>
                <li  onClick={()=>handleShowMore(0)}><img src={elementSelected == 0 ? "images/EllipseSelected.svg"  :  "images/EllipseNotSelected.svg"} alt="Elipse" /></li>
                <li onClick={()=>handleShowMore(1)}><img src={elementSelected == 1 ? "images/EllipseSelected.svg"  :  "images/EllipseNotSelected.svg"} alt="Elipse" /></li>
                <li  onClick={()=>handleShowMore(2)}><img src={elementSelected == 2 ? "images/EllipseSelected.svg"  :  "images/EllipseNotSelected.svg"} alt="Elipse" /></li>
                <li  onClick={()=>handleShowMore(3)}><img src={elementSelected == 3 ? "images/EllipseSelected.svg"  :  "images/EllipseNotSelected.svg"} alt="Elipse" /></li>
            </ul>
            </div>
        </div>  
        <div className="flex-center">
        <div className="service-cards">
        {cardsData.slice(elementSelected * itemsPerPage, (elementSelected + 1) * itemsPerPage).map((el, index) => (
  <ServiceCard key={index} card={el} />
))}
        </div>
        </div>
    </div>
    <div className="offices">
        <div className="flex-center">
            <h2 className='home-header'>Work wherever it suits you</h2>
        </div>
        <div className='office-filter-wrapper'>
                <select name="" id="" placeholder="Filter">
                    <option value="">Filter</option>
                </select>
        </div>
        <div className="flex-center">
        <div className="offices-cards">
        {officeData.slice(0, officesRange).map((el, index) => (
          <OfficeCard key={index} card={el} />
        ))}
      </div>
        </div>
        <div className='flex-center'>
            <button className="button" onClick={()=>loadMore()}>See more</button>
        </div>
    </div>
    <div className='working-with-us'>
        <div className='working-left'>
            <img src="images/imageChair.jpg" alt="Image" />
        </div>
        <div className='working-right'>
            <h2 className='home-header'>Why working with us</h2>
            <p className='home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="cons">
                <div>
                    <img src="/images/cons/con1.png" alt="Con" />
                    <p>Ut enim ad minim veniam, quis nostrud.aboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <img src="/images/cons/con2.png" alt="Con" />
                    <p>Ut enim ad minim veniam, quis nostrud.aboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <img src="/images/cons/con3.png" alt="Con" />
                    <p>Ut enim ad minim veniam, quis nostrud.aboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <button className="button">Read more</button>
        </div>
    </div>
   </div>
  )
}
