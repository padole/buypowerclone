import React from 'react'
import Navbar from '../../components/Header/navbar'
import Chosse from '../../components/Choose/choose';
import Testimonial from '../../components/Testimonial/testimonial';
import Partners from '../../components/Partners/partner';
import Register from '../../components/Register/register';
import Footer from '../../components/Footer/footer';
import bgwoman from '../../assets/bgwoman.jpg'
import "./contact.css"
// import "./marchant.css"

function Contact() {

    return (
    <div>
    <div><Navbar></Navbar></div>
    <div className='slider-contact'><img src={bgwoman} alt="" /></div>
    <div className="contact-form">
        <h4>Contact Us</h4>
        <hr />
        <div className="marchant-form1">
        <div className="marchant-name">
          <input type="email" placeholder="Email" />
        </div>
        <div className="marchant-label">
            <label>Reason</label>
        </div>
        {/* <div className="marchant-phone">
          <input type="number" placeholder="Phone" />
        </div> */}
        <div className="marchant-option">
          <select className='contact-option1'>
              <option value="option1">Please select a reason</option>
              <option value="option1">Please select a reason</option>
              <option value="option1">Please select a reason</option>
              <option value="option1">Please select a reason</option>
              <option value="option1">Please select a reason</option>
              <option value="option1">Please select a reason</option>
              <option value="option1">Please select a reason</option>
              {/* <option value="option1">----Select State----</option>
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
              <option value="option1">----Select State----</option> */}
          </select>
        </div>
        <div className="marchant-email">
          <input type="text" placeholder="Other reasons (Optional)" />
        </div>

          <div className="marchant-label">
            <label>Discription</label>
          </div>
          <br />
        <div className="marchant-comment">
        <input type="text" placeholder="Type your message" />
        </div>

        <div className="marchant-paragraph">
            <p><span>1.</span> Ensure the email you are providing is active and valid.</p>
            <p><span>2.</span> Please wait for a period of 24 hours before sending another as sending multiple messages will reduce the response time as we try to resolve.</p>
            <p><span>3.</span> Kindly check your inbox and/or spam for our response.</p>
        </div>
        {/* <div className="marchant-check">
          <input type="checkbox" /><label> I accept the terms and conditions</label>
        </div> */}
        <div className="contact-button">
          <button>I Understand, proceed</button>
        </div>
        {/* <h4>Need help? Call 0817-451-8746</h4> */}
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

export default Contact