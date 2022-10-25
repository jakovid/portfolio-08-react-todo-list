import React from "react";

export default function Project({ project, selectProject, deleteProject }) {
function handleProjectSelect(){
    selectProject(project.id)
}

function handleDeleteProject(){
    deleteProject(project.id)
}

    return (
        <div>
            <div className='projectName' onClick={handleProjectSelect}>
                { project.name }
            </div>
            <div> {project.todos.length} </div>
            {!project.default ? <button onClick={handleDeleteProject}>X</button> : null}
        </div>
    )
}