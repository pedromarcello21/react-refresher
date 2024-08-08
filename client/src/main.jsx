import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Favorites from './components/Favorites.jsx'

const routes=[
  {
    path:'/',
    element: <App />
  },
  {
    path:'/favorites',
    element:<Favorites />
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
