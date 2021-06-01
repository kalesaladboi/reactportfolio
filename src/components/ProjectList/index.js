import React, { useState } from 'react'

function ProjectList() {

    const [projects] = useState([])

    return(
            <>
            {projects.map((project, i) => (
                <div className="col-lg-4 col-md-6 mb-4" key={project.name}>
            <div className="project-container">
                <div className="project-details d-flex justify-content-center align-items-center">
                    <ul className="list-unstyled project-list text-center">
                        <li className="project-title">{project.name} </li>
                        <li><a href={project.github} target="_blank" rel="noreferrer"><i className="fab fa-github-alt"></i></a></li>
                        <li><a href={project.live} target="_blank" rel="noreferrer"><i className="fas fa-desktop"></i></a></li>
                    </ul>
                </div>
            </div>
            </div>
            ))} 
            </>
        
    )
}

export default ProjectList;
