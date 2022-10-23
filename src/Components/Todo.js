import React from "react";

export default function Todo({ todo }) {
    return (
        <div className='todo'>
            { todo.todo }
        </div>
    )
}