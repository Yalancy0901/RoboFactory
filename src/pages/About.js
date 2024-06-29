import React from 'react';
import './About.css';
import logo from '../components/Robo Factory.png';


const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="image-container">
        <img src={logo} alt="Our logo" />
          
        </div>
        <div className="story-container">
          <h2>OUR STORY</h2>
          <p>
          In the heart of every great battle lies a champion built with precision, passion, and the best components available. Born from a love of robot combat and the thrill of engineering excellence, our platform was created to serve the dedicated community of robot combat enthusiasts, hobbyists, and professional builders. We understand the challenges of finding reliable, high-quality parts, and we've made it our mission to bring together a comprehensive selection of components under one roof. Whether you're building your first battle bot or fine-tuning a seasoned champion, we're here to support you every step of the way.
           </p>
        </div>
      </div>
      <div className="vision-mission">
        <div className="box">
          <h3 align='center'>OUR VISION</h3>
          <p>
          To be the leading hub for robot combat competition components, inspiring innovation and excellence within the community. We envision a world where every enthusiast, hobbyist, and professional builder has easy access to the best parts and accessories, enabling them to push the boundaries of creativity and performance in robot combat.
          </p>
        </div>
        <div className="box">
          <h3 align='center'>OUR MISSION</h3>
          <p>
          Our mission is to empower the robot combat community by providing the highest quality parts and accessories, fostering a vibrant and supportive environment for enthusiasts, hobbyists, and professional builders alike. We are committed to sourcing and offering the latest, most advanced components to ensure our customers stay at the forefront of technological advancements in robot combat. By delivering exceptional customer service and a seamless shopping experience, we aim to inspire innovation, creativity, and excellence within the community, helping every builder achieve their full potential in the thrilling world of robot combat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
