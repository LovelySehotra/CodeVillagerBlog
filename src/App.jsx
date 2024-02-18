import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"

import { Footer, Header, Signup } from './components'
import { Outlet, Route, Routes } from 'react-router-dom'

import Blogs from './Pages/Blogs/Blogs'
import Home from './Pages/HomePage/Home'
import Editor from './Pages/Editor/Editor.jsx'
import AboutPage from './Pages/AboutPage/AboutPage'
import Login from './Pages/Login/Login.jsx'
import SingleBlogPage from './Pages/SingleBlogPage/SingleBlogPage'
import AddPost from './Pages/AddPost/AddPost'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
 
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/all-posts' element={<Blogs/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/add-post' element={<AddPost/>}/>
      <Route path='/editor' element={<Editor/>}/>
      <Route path='/blog/:id' element={<SingleBlogPage/>}/>

    </Routes>
  )
}

export default App