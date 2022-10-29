import React from "react";
import Checklist from "../Images/Checklist";
import Today from "../Images/Today";
import Week from "../Images/Week";
import Month from "../Images/Month";

export default function Project({ project, selectProject }) {
function handleProjectSelect(){
    selectProject(project.id)
}

    return (
        <div className='projectItem' onClick={handleProjectSelect}>
            {project.name == 'Today' ? <Today /> : project.name == 'This Week' ? <Week /> : project.name == 'This Month' ? <Month /> : <Checklist />}
            <div className='projectName' >
                { project.name }
            </div>
            <div> {project.todos.filter(todo => !todo.complete).length} </div>
        </div>
    )
}