import React from "react";

export default function Project({ project }) {
    return (
        <div className='projectName'>
            { project.name }
        </div>
    )
}