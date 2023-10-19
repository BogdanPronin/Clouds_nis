import React from "react";
import "../styles/projects.css";
import project1 from"../images/project1.jpg";
import project2 from"../images/project2.jpg";
import project3 from"../images/project3.jpg";
import project4 from"../images/project4.jpg";
import project5 from"../images/project5.jpg";
import project6 from"../images/project6.jpg";

export const Projects = () => {
  return (

      <div className="projects">
        <div className="projects-wrapper">
            <div className="projects-text">Проекты</div>
            <img className="projects-project1" src={project1}/>
            <img className="projects-project2" src={project2}/>
            <img className="projects-project3" src={project3}/>
            <img className="projects-project4" src={project4}/>
            <img className="projects-project5" src={project5}/>
            <img className="projects-project6" src={project6}/>

        </div>

      </div>

  );
};
