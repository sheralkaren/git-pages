import React from "react";
import {todos} from "../assets/data.json"
import {Link} from "react-router-dom";


export default function Dashboard(){
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
            {
                todos.map((todo) => {
                    <li key={todo.id}>
                        <Link to={todo.url}>{todo.title}</Link>
                    </li>
                })
            }
            </ul>
        </div>
    )
} 