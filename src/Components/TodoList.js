import React, { useRef } from "react";
import PopulateTodoList from "./PopulateTodoList";

export default function TodoList({ project, addTodo, toggleTodo, clearTodos, deleteProject }){
    const todoNameRef = useRef();
    function handleAddTodo(e) {
        const todo = todoNameRef.current.value;
        if (todo === '') return;
        addTodo(todo, project.id);
        todoNameRef.current.value = '';
    }
    function handleClearTodos() {
        clearTodos(project.id);
    }

    function handleDeleteProject(){
        deleteProject(project.id)
    }

    return(
        <div id="todoContainer">
            <div id="todoListHeader">
                <h1>{project.name}</h1>
                {!project.default ? <button id='removeProject' onClick={handleDeleteProject}>Remove Project</button> : null}
            </div>
            <div id='todoList'>
            <PopulateTodoList projectId={project.id}todos={ project.todos } toggleTodo={ toggleTodo }/>
                <div>
                    <input ref={ todoNameRef } type='text' />
                    <button  onClick={handleAddTodo}>Add New Todo</button>
                    <button onClick={handleClearTodos}>Clear Completed</button>
                </div>
            </div>
        </div>
    )
    
        
}