import React from 'react'
import logo from "../assets/logo.png"
function Logo({width = '100px'}) {
  return (
    <div className='w-8'><img src={logo} alt="logo" /></div>
  )
}

export default Logo