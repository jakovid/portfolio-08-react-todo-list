import React from "react";
import Todo from "./Todo";

export default function PopulateTodoList({ todos, projectId, toggleTodo }) {
    
    return(
        todos.map(todo => {
            return <Todo key={todo.id} projectId={projectId} toggleTodo={toggleTodo} todo={ todo } />
        })
    )
}