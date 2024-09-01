import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Navbar from "./components/Navbar.jsx";
import {todos} from "./assets/data.json";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from './routes/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <App />
      </div>

    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <h1>Contact</h1>
      </div>
    ),
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
