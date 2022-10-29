import React, { useState, useRef, useEffect } from "react";
import PopulateProjectList from "./PopulateProjectList";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default function TodoMain() {
    const [projects, setProjects] = useState([{ id: uuidv4(), name: 'Today', default:true, todos:[{todo:'eat', id:uuidv4(), complete:false}]},{ id: uuidv4(), name: 'This Week', default:true, todos:[]}]);
    const [selectedProject, setSelectedProject] = useState(projects.find(project => project.name === 'Today'));
    const projectNameRef = useRef();
    const LOCAL_STORAGE_KEY = 'todoApp.projects';

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedProjects) setProjects(storedProjects)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects))
      }, [projects])

    function handleAddProject(e) {
        const name = projectNameRef.current.value;
        if (name === '') return;
        setProjects(prevProjects => {
            return [...prevProjects, { id: uuidv4(), name: name, default:false, todos: []}]
        });
        projectNameRef.current.value = null;
    }

    function selectProject(id) {
        const theProject = projects.find(project => project.id === id);
        setSelectedProject(theProject);
    }

    function addTodo(todo, id){
        const newProjects = [...projects];
        const targetProject = newProjects.find(targetProject => targetProject.id === id);
        const newTodo = {todo:todo, id:uuidv4(), complete:false}
        targetProject.todos.push(newTodo);
        setProjects(newProjects);
    }

    function toggleTodo(projectId, todoId) {
        const newProjects = [...projects];
        const project = newProjects.find(targetProject => targetProject.id === projectId);
        const todo = project.todos.find(targetTodo => targetTodo.id === todoId);
        todo.complete = !todo.complete;
        setProjects(newProjects);
    }

    function clearTodos(projectId){
        const newProjects = [...projects];
        const project = newProjects.find(targetProject => targetProject.id === projectId);
        project.todos = project.todos.filter(todo => !todo.complete);
        setProjects(newProjects);
    }

    function deleteProject(projectId){
        let newProjects = [...projects];
        newProjects = newProjects.filter(targetProject => targetProject.id != projectId);
        console.log(projectId);
        console.log(newProjects);
        setProjects(newProjects);
    }

    return (
        <div id='todoBody'>
            <div id='projectList'>
                <h2>Default Projects</h2>

                <PopulateProjectList selectProject={selectProject} projects={ projects.filter(project => project.default)} />

                <h2>My Projects</h2>

                <PopulateProjectList selectProject={selectProject} projects={ projects.filter(project => !project.default)}  />

                <input ref={projectNameRef} type='text'/>

                <button onClick={handleAddProject}>add new project</button>
            </div>
            <div id='todoList'>
                <TodoList project={ selectedProject } addTodo={addTodo} toggleTodo={toggleTodo} clearTodos={clearTodos} deleteProject={deleteProject}/>
            </div>
        </div>
    )
}