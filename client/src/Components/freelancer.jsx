import React, { useState } from 'react';
import './style.css'; // Import your main CSS file
import './mediaqueries.css'; // Import your media queries CSS file
import ReviewsSection from './reviews'
import PlanCards from './plan';
import img1 from '../assets/about-pic.png'
import img2 from '../assets/profile-pic.png'
import img4 from '../assets/linkedin.png'
import img5 from '../assets/github.png'
import img6 from '../assets/experience.png'
import img7 from '../assets/education.png'
import img8 from '../assets/arrow.png'
import img9 from '../assets/checkmark.png'
import img10 from '../assets/project-1.png'
import img11 from '../assets/email.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Navbar } from '@material-tailwind/react';

import Navbar from './Navbar'
import Footerlabour from './Footerlabour';

function Hello() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
  };

  return (
    <div>
      <Navbar/>
      <section id="profile">
        <div className="section__pic-container">
          <img src={img2} alt="John Doe profile " />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">John Doe</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="info-box">
            <h3>Rating: {'★'.repeat(5)}</h3>
            <div className="details">
              <span role="img" aria-label="Location">🌍</span> India 
              <span role="img" aria-label="Languages"> 🗣️</span> I speak English, Urdu, Punjabi 
              <span role="img" aria-label="Orders"> 🛍️</span> 111 orders completed 
            </div>
          </div>
          <div className="tag-container">
            <button
                className="tagbtn"
                onClick={() => window.location.href = './#contact'}
              >
                React
            </button>
            <button
                className="tagbtn"
                onClick={() => window.location.href = './#contact'}
              >
                Django
            </button>
            <button
                className="tagbtn"
                onClick={() => window.location.href = './#contact'}
              >
                Node js
            </button>
          </div>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('../assets/resume-example.pdf')}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={img4}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.location.href = 'https://linkedin.com/'}
            />
            <img
              src={img5}
              alt="My Github profile"
              className="icon"
              onClick={() => window.location.href = 'https://github.com/'}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={img1} alt="Profile " id="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={img6} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>2+ years <br />Frontend Development</p>
              </div>
              <div className="details-container">
                <img src={img7} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
              </div>
            </div>
            <div className="text-container">
              <p>
              I'm John, a dedicated frontend web developer with a passion for creating user-friendly and 
              visually appealing websites. I specialize in HTML, CSS, and JavaScript, and I excel in responsive 
              design and modern web technologies like React and Vue.js. I'm committed to collaborating with cross-functional 
              teams to turn concepts into functional, stunning web applications. I'm always eager to learn and grow in this 
              dynamic field, and I'm excited to work with you to bring your web projects to life.
              </p>
            </div>
          </div>
        </div>
        <img
          src={img8}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href = './#experience'}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Tailwind</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Wordpress</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Javascript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>React.js</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Next.js</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                {/* Add more experience items */}
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
              <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Django</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Node.js</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>MySQL</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={img9} alt="Experience icon" className="icon" />
                  <div>
                    <h3>MongoDB</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                {/* Add more experience items */}
              </div>
            </div>
          </div>
        </div>
        <img
          src={img8}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href = './#projects'}
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          {/* <div className="about-containers"> */}
          <Slider {...settings}>
            <div className="details-container color-container carousel-item">
              <div className="article-container">
                <img src={img10} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container carousel-item">
              <div className="article-container">
                <img src={img10} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project Two</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container carousel-item">
              <div className="article-container">
                <img src={img10} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project Three</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container carousel-item">
              <div className="article-container">
                <img src={img10} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project Four</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container carousel-item">
              <div className="article-container">
                <img src={img10} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project Five</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            </Slider>
            {/* Add more project items */}
          {/* </div> */}
        </div>
        <img
          src={img8}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href = './#contact'}
          />
        </section>
        {/* plan card section */}
        <h1 className="title">My Plans</h1>
        <PlanCards />
        {/* plan card section */}
        <h1 className="title">Customer Reviews</h1>
        {/* start of review section */}
          <ReviewsSection/>
    {/* End of review section */}


        <section id="contact">
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img
                src={img11}
                alt="Email icon"
                className="icon contact-icon email-icon"
              />
              <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
            </div>
            <div className="contact-info-container">
              <img
                src={img4}
                alt="LinkedIn icon"
                className="icon contact-icon"
              />
              <p><a href="https://www.linkedin.com">LinkedIn</a></p>
            </div>
          </div>
        </section>
        <Footerlabour/>
        <script src="script.js"></script>
      </div>
    );
}
  
export default Hello;