import React from "react";
import Project from "./Project";

export default function projectList({ projects }){
    return(
        projects.map(project => {
            return <Project key={project.id} project={project} />
        })
    )
}