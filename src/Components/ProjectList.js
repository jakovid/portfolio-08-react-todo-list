import React, { useState, useRef } from "react";
import DefaultProjectList from "./DefaultProjectList";
import UserProjectList from "./UserProjectList";
import { v4 as uuidv4 } from 'uuid';

export default function ProjectList() {
    const [userProjects, setUserProjects] = useState([]);
    const [defaultProjects, setDefaultProjects] = useState([{ id: uuidv4(), name: 'Today'},{ id: uuidv4(), name: 'This Week'}]);
    const projectNameRef = useRef();

    function handleAddProject(e) {
        const name = projectNameRef.current.value;
        if (name === '') return;
        setUserProjects(prevProjects => {
            return [...prevProjects, { id: uuidv4(), name: name}]
        });
        projectNameRef.current.value = null;
    }

    return (
        <div id='todoMenu'>
            <h2>Default Projects</h2>

            <DefaultProjectList projects={ defaultProjects }/>

            <h2>My Projects</h2>

            <UserProjectList projects={ userProjects }/>

            <input ref={projectNameRef} type='text'/>

            <button onClick={handleAddProject}>add new project</button>
        </div>
    )
}