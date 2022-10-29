import React from "react";
import Project from "./Project";

export default function projectList({ projects, selectProject }){

    return(
        projects.map(project => {
            return <Project key={project.id} selectProject={selectProject} project={project}/>
        })
    )
}