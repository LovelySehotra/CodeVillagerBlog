import React from 'react'
import logo from "../assets/logo.png"
function Logo({width = '100px'}) {
  return (
    <div className='w-10 border border-red-500 rounded-full '><img src={logo} alt="logo" /></div>
  )
}

export default Logo