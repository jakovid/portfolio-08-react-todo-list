import React from "react";
import Project from "./Project";

export default function projectList({ projects, selectProject, deleteProject }){
    return(
        projects.map(project => {
            return <Project key={project.id} selectProject={selectProject} project={project} deleteProject={deleteProject} />
        })
    )
}