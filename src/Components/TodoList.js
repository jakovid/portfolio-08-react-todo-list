import React from "react";
import PopulateTodoList from "./PopulateTodoList";

export default function TodoList({ project }){
    return(
        <div>
            <h2>{project.name}</h2>
            <PopulateTodoList todos={ project.todos }/>
        </div>
    )
    
        
}