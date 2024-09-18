import React from 'react'
import Navbar from '../../components/Header/navbar'
import Banner from '../../components/Banner/banner'
import Chosse from '../../components/Choose/choose';
import Testimonial from '../../components/Testimonial/testimonial';
import Partners from '../../components/Partners/partner';
import Register from '../../components/Register/register';
import Footer from '../../components/Footer/footer';
import "./marchant.css"
import bgwoman from '../../assets/bgwoman.jpg'

function marchant() {
  return (
    <div>
      <div><Navbar></Navbar></div>
      <div className='slider-marchant'><img src={bgwoman} alt="" /></div>
      <div className="marchant-form">
          <h4>MERCHANT APPLICATION</h4>
          <hr />
          <div className="marchant-form1">
          <div className="marchant-name">
            <input type="text" placeholder="Name" />
          </div>
          <div className="marchant-phone">
            <input type="number" placeholder="Phone" />
          </div>
          <div className="marchant-option">
            <select className='marchant-option1'>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
                <option value="option1">----Select State----</option>
            </select>
          </div>
          <div className="marchant-email">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="marchant-comment">
          <input type="text" placeholder="Why do you want to be a merchant?" />
          </div>
          <div className="marchant-check">
            <input type="checkbox" /><label> I accept the terms and conditions</label>
          </div>
          <div className="marchant-button">
            <button>Apply</button>
          </div>
          <h4>Need help? Call 0817-451-8746</h4>
        </div>          
      </div>
      <div className='chose-marchant'><Chosse></Chosse></div>
      <div className='testimonial-marchant'><Testimonial></Testimonial></div>
      <div className='partners-marchant'><Partners></Partners></div>
      <div className='register-marchant'><Register></Register></div>
      <div className='footer-marchant'><Footer></Footer></div>
      

    
    
    
    </div>
  )
}
export default marchant