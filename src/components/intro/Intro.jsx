import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/img1.JPG';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>I’ve spent the last year in a Freelancing environment, working with HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, Node,js, Django, Flask, Photoshop, Illustrator Corel_Draw and WordPress building everything from landing pages to Full Web Applications and websites in WordPress. My experience as a Designer and DEveloper in an Freelancer collaborate with fellow developers and designers from all over the world. Additionally, working with multiple clients isn’t an easy task, however, it has helped me become efficient, productive, and fast even in a very stressful environment, which is an important skill in the tech industry.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro