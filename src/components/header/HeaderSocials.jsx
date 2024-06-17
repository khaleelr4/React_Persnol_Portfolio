import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/muhammad-khalil-ur-rehman-031643b0/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/khaleelr4?tab=repositories" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/khaleel.rehman.167" target="_blank" rel="noreferrer" ><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials