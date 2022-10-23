import React, { useState, useRef } from "react";
import ProjectList from "./ProjectList";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default function TodoMain() {
    const [projects, setProjects] = useState([{ id: uuidv4(), name: 'Today', default:true, todos:[{todo:'eat', id:uuidv4(), complete:false}]},{ id: uuidv4(), name: 'This Week', default:true, todos:[]}]);
    const [selectedProject, setSelectedProject] = useState([]);
    const projectNameRef = useRef();

    function handleAddProject(e) {
        const name = projectNameRef.current.value;
        if (name === '') return;
        setProjects(prevProjects => {
            return [...prevProjects, { id: uuidv4(), name: name, default:false, todos: []}]
        });
        projectNameRef.current.value = null;
    }

    // function selectProject(id) {

    // }

    return (
        <div id='todoBody'>
            <div id='projectList'>
                <h2>Default Projects</h2>

                <ProjectList projects={ projects.filter(project => project.default) } />

                <h2>My Projects</h2>

                <ProjectList projects={ projects.filter(project => !project.default) } />

                <input ref={projectNameRef} type='text'/>

                <button onClick={handleAddProject}>add new project</button>
            </div>
            <div id='todoList'>
                <TodoList todos={ selectedProject }/>
            </div>
        </div>
    )
}