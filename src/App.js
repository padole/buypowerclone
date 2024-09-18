import React from 'react';
import Navbar from './components/Header/navbar';
import Banner from './components/Banner/banner';
import Chosse from './components/Choose/choose';
import Testimonial from './components/Testimonial/testimonial';
import Partners from './components/Partners/partner';
import Register from './components/Register/register';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Chosse/>
      <Testimonial/>
      <Partners/>
      <Register/>
      <Footer/>

    </div>
  );
}

export default App;