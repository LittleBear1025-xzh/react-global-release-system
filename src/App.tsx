import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router/IndexRouter'
import './App.css'


export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
