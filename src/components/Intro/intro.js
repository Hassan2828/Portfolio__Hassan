import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
         <span className='hello'>Hello,</span>
         <span className="introText">I'm <span className='introName'>Hassan Raza Ansari</span>
         <br />Website Designer</span>
         <p className='introPara'>I am a skilled web designer with experience in creating <br />visually appealing and user friendly websites.</p>
         <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg' />Hire me</button></Link>
      </div>
      <img src={bg} className='bg' alt="profile" />
    </section>
  )
}

export default Intro;