import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"

import { Footer, Header } from './components'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'
import Blogs from './Pages/Blogs/Blogs'
import Home from './Pages/HomePage/Home'
import About from './components/About/About'
import AboutPage from './Pages/AboutPage/AboutPage'
import SingleBlog from './components/SingleBlog/SingleBlog'
import SingleBlogPage from './Pages/SingleBlogPage/SingleBlogPage'

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
      <Route path='/blog/:id' element={<SingleBlogPage/>}/>

    </Routes>
  )
}

export default App