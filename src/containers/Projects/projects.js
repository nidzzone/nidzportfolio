import React from 'react';
import Feature from '../../components/feature/Feature';
import Project1 from '../../assets/project1.jpg'
import Project2 from '../../assets/project2.jpg'
import Project3 from '../../assets/project3.jpg'
import './projects.css';

const Projects = () => (
  <div className="gpt3__whatgpt3 section__margin" id="project">
  
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Projects</h1>
      <p>Portfolio</p>
    </div>

    <div className="gpt3__whatgpt3-container">
    
      <Feature title="HTML-CSS First Project" />

      <div className="gpt3__box">
      
    <img src={Project1} alt="Project1" />

    <p>Project 1</p>
    </div>

      <Feature title="Capstone E-commerce Project" />
       <div className="gpt3__box">
    <img src={Project2} alt="Project2" />
    <p>Project 2</p>
    </div>

      <Feature title="Simple Calculator Project" />

      <div className="gpt3__box">
    <img src={Project3} alt="Project3" />
    <p>Project 3</p>
    </div>


    </div>


  </div>
);

export default Projects;