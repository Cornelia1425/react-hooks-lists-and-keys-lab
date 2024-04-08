import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
    {projects.map((project) =>(
        <div key={project.id}>
          <p>{project.name}</p> 
          <p>{project.about}</p> 
        {/* {project.technologies.map((technology)=>( <span key={technology}>{technology}</span>
          )
        )} */}
        <span> {project.technologies} </span>
         
        </div>
        ))}
        </div>
    </div>
  );
}

export default ProjectList;
