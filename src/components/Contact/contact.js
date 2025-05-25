import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
      const form = useRef();

      const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id="contactPage">
        <div id="clients">
           <h1 className='contactPageTitle'>My Clients</h1>
           <p className='clientDesc'>
            I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes
           </p>
           <div className="clientImgs">
            <img src={Walmart} className='clientImg' alt="Client" />
            <img src={Adobe} className='clientImg' alt="Client" />
            <img src={Microsoft} className='clientImg' alt="Client" />
            <img src={Facebook} className='clientImg' alt="Client" />
           </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' />
                <input type="email" placeholder='Your Email' />
                <textarea name="message" rows="5" placeholder='Your Message' className='msg'>
                </textarea>
                <button className='submitBtn' type='submit' value={send}>
                  Submit
                </button>
                <div className="links">
                    <img src={FacebookIcon} className='link' alt="Facebook" />
                    <img src={TwitterIcon} className='link' alt="twitter" />
                    <img src={YouTubeIcon} className='link' alt="Youtube" />
                    <img src={InstagramIcon} className='link' alt="Instagram" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact