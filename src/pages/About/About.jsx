import React from 'react'
// import { useEffect, useState } from 'react'
import Navbar from '../../components/Header/navbar'
// import Banner from '../../components/Banner/banner'
import "./About.css"
import bgwoman2 from '../../assets/bgwoman2.jpg'
// import Accordion from 'react-bootstrap/Accordion';
 
function About () {
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var parent = this.parentElement;
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        sessionStorage.setItem(parent.id, ""); // store it as closed
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
       parent.style.maxHeight = parseInt(parent.style.maxHeight) + panel.scrollHeight + "px";
       sessionStorage.setItem(parent.id, "open"); 
      } 
    });


    // here we are getting state from sessionStorage
  // var parent = acc[i].parentElement;
  // if (sessionStorage.getItem(parent.id) === "open") {
  //   parent.querySelector(".panel").style.maxHeight = parent.querySelector(".panel").scrollHeight + "px";
  //   parent.style.maxHeight = parseInt(parent.style.maxHeight) + parent.querySelector(".panel").scrollHeight + "px";
  //   acc[i].classList.add("active");
  // }
  }
  
  return (
    <div>
      <div>
      <Navbar></Navbar>
      </div>
      <div className='slider-faq'>
      <img src={bgwoman2} alt="" />
      </div>
       
      <div className="faq-heading">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="line">
        <hr />
      </div>

      {/* <div className="faq-heading1">
        <h1>My Account</h1>
      </div> */}



           <div className="faq-accordion">
           <h2>My Account</h2>
{/* <p>In this example we have added a "plus" sign to each button. When the user clicks on 
the button, the "plus" sign is replaced with a "minus" sign.</p> */}
<button className="accordion">Section 1</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 2</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 3</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<h2>My Account</h2>
{/* <p>In this example we have added a "plus" sign to each button. When the user clicks on 
the button, the "plus" sign is replaced with a "minus" sign.</p> */}
<button className="accordion">Section 1</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 2</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 3</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<h2>My Account</h2>
{/* <p>In this example we have added a "plus" sign to each button. When the user clicks on 
the button, the "plus" sign is replaced with a "minus" sign.</p> */}
<button className="accordion">Section 1</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 2</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 3</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
           </div>


    </div>
  )
}



export default About