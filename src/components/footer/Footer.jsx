import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa';
// import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Muhammad Khalil-Ur-Rehman</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/muhammad-khalil-ur-rehman-031643b0/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/khaleelr4" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/khaleel.rehman.167" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://twitter.com/khalilr79340598" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      <a href="https://www.youtube.com/channel/UCSXebOz14Ni6eBF98Bfr4lw" target="_blank" rel="noreferrer" ><FaYoutube /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Muhammad Khalil {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
