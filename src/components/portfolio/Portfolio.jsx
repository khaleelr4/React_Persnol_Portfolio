import React from 'react';
import IMG1 from '../../assets/codeblue.png';
import IMG2 from '../../assets/investieren_mit_20.png';
import IMG3 from '../../assets/kasur_pharmacy.png';
import IMG4 from '../../assets/dbs.png';
import IMG5 from '../../assets/IMG5.png';
import IMG6 from '../../assets/IMG6.png';
import IMG7 from '../../assets/IMG7.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'CodeBlue',
      img: IMG1,
      description:
        'CodeBlue website that allows you to check the IT base website for doing professional work',
      technologies: 'WordPress',
      link: 'http://codeblueai.com',
      // github: 'https://github.com/Meri-MG/bookstore---react',
    },
    {
      id: 2,
      title: 'DBSConstructionGroup',
      img: IMG4,
      description:
        'FakeStore app that provides information about about there real state projects and services what they are giving in there city',
      technologies: 'WordPress',
      link: 'http://dbsconstructiongroup.com',
      // github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 7,
      title: 'TXRoofTopRangers',
      img: IMG7,
      description:
        'I have created that Webiste for a rooftop reparing and fixing',
      technologies: 'WordPress',
      link: 'http://txrooftoprangers.com',
      // github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 6,
      title: 'Seamless Solution',
      img: IMG6,
      description:
        'An webiste for both real estate and it services also graphics is done by me visit the webiste',
      technologies: 'WordPress',
      link: 'https://seamlesssolutionz.com/',
      // github: 'https://github.com/lukinoo/math-resource',
    },
    {
      id: 5,
      title: 'Real State',
      img: IMG5,
      description:
        'A WordPress website for real state completion and will be linked soon (In Progress)',
      technologies: 'WordPress',
      // link: 'https://meri-mg.github.io/Unilab-world-news/',
      // github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 3,
      title: 'Investieren mit 20',
      img: IMG2,
      description: 'Created a logo for a youtube channel and that channel is about stock and exchange investment',
      technologies: 'Adobe | Adobe Illustrator',
      link: 'https://www.youtube.com/@investierenmit2040',
      // github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'Kasur Pharmacy',
      img: IMG3,
      description:
        'I have created that logo for a medical store located near my home',
      technologies: 'Adobe | Corel | Corel-Draw',
      link: 'https://raw.githubusercontent.com/khaleelr4/Fiverr_Design/main/Kasur%20Pharmacy%20Logo/Kasur-phrmacy.png',
      // github: 'https://github.com/Meri-MG/shelter',
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {/* <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a> */}
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
