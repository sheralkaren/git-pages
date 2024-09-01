import React from "react";
import {Link} from "react-router-dom";
import {todos} from "../assets/data.json"
export default function Navbar(){
    return (
        <div>
            <Link id="new" to="/new">New Component</Link>
            <p><a href="/">Home</a></p>
            <p><a href="/dashboard">Dashboard</a></p>
            <p><a href="/contact">Contact</a></p>

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