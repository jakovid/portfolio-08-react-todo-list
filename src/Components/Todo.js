import React from "react";

export default function Todo({ todo, projectId, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(projectId, todo.id)
    }

    return (
        <div className="todoItem">
            <input type='checkbox' checked={todo.complete} onChange={handleTodoClick}/>
            { todo.todo }
        </div>
    )
}