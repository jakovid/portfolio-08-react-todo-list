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
        <div>
            <h2>{project.name}</h2>
            <div id='todoList'>
                <PopulateTodoList projectId={project.id}todos={ project.todos } toggleTodo={ toggleTodo }/>
                <div>
                    <input ref={ todoNameRef } type='text' />
                    <button onClick={handleAddTodo}>Add New Todo</button>
                    <button onClick={handleClearTodos}>Clear Completed</button>
                </div>
                {!project.default ? <button onClick={handleDeleteProject}>X</button> : null}
            </div>
        </div>
    )
    
        
}