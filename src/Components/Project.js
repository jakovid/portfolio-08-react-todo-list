import React from "react";

export default function Project({ project, selectProject }) {
function handleProjectSelect(){
    selectProject(project.id)
}

    return (
        <div className='projectName' onClick={handleProjectSelect}>
            { project.name }
        </div>
    )
}