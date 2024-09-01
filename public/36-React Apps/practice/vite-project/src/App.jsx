import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import { useEffect } from 'react';

function App() {
  const LoadingData = [{
    id: 1,
    title: "John Doe"
  }]
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState(LoadingData);

  const getPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
  }

  useEffect(() => {
    getPosts()
      .then(response => {
        console.log(response.data)
        setPosts(response.data)
      })
      .catch(error =>
        console.error(error));
  }, []);

  return (
      <div>
        <h1>Dharmendra Rathod Resume</h1>
        <div>
        </div>
        <div>
          <ul>
            {posts.map(post => {return <li key={post.id} style={{listStyle: "none"}}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              </li>})}
          </ul>
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
      </div>
      <footer>
        @copyright {new Date().getFullYear()} - S&D Inc.
      </footer>

      </div>



  )
}

export default App
