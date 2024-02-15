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
      <Route path='/blogs' element={<Blogs/>}/>

    </Routes>
  )
}

export default App