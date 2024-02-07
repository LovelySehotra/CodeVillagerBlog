import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {logout} from '../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2  hover:text-red-600 transition-all ease-in-out duration-300 rounded-full'
    onClick={logoutHandler}
    >LogOut</button>
  )
}

export default LogoutBtn