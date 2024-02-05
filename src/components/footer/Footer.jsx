import React from 'react'
import "./footer.css"
export const Footer = () => {
  return (
    <div className="container">
      <div className='footer-top-line'/>
      <footer className='footer'>
        <div className='footer-left'>
      <a href="" className='logo'>
        <img src="images/Logo.svg" alt="Logo" />
        <div className='logo-title'>
            <span className='logo-agile'>Agile</span>
            <span>Spaces</span>
        </div>
      </a>
      <p className='footer-text'>Your Modern Office Space for more productibility</p>
        </div>
        <div className="footer-right">
            <div>
            <h3 className='footer-title'>Services</h3>
              <ul>
                <li>
                Booking
                </li>
                <li>
                Selling
                </li>
              </ul>
            </div>
            <div>
            <h3 className='footer-title'>About</h3>
              <ul>
                <li>
                Our Story
                </li>
                <li>
                Blog
                </li>
              </ul>
            </div>
            <div>
              <h3 className='footer-title'>Follow us</h3>
              <ul className='follow-links'>
                <li>
                  <a href=""><img src="images/soc/linkedIn.svg" alt="" /></a>
                </li>
                <li>
                <a href=""><img src="images/soc/twitter.svg" alt="" /></a>
                </li>
                <li>
                <a href=""><img src="images/soc/facebook.svg" alt="" /></a>
                </li>
              </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}
