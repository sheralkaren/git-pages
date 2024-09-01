import React, { useState, useEffect } from "react";
// import { getPosts } from "../services/getPosts";
import axios from "axios";

function Posts() {
    const animals = ["Cat", "Dog", "Man"];
    const [posts, setPosts] = useState({});
    const api = axios.create({
        baseURL: `https://jsonplaceholder.typicode.com`,
    })
    const getPosts = () => {
        return api.get("/posts");
    }

    useEffect(() => {
        console.log("Loading data!")
        getPosts().then((res) => {
            console.log(res.data);
            setPosts(res.data);
        })
            .catch(error => console.log(error));
    }, [])


    return (
        <div className="weather-display">
            <h1>Posts</h1>
            <ul>
                {animals.map(animal => {return (<li style={{listStyle: "none"}}>{animal}</li>)})}

                {/* {posts.map(post => {
                    return (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>);
                })} */}
            </ul>
        </div>);
}

export default Posts;
