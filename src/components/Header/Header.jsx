import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {Container,Logo,LogoutBtn} from "../index"
import { useSelector } from 'react-redux';
import "./header.css"




function Header() {

    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: 'Login',
            slug: "/login",
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: 'Blog',
            slug: "/all-posts",
            active: true,
        },
        {
            name: 'Add Post',
            slug: "/add-post",
            active: authStatus,
        },
        {
            name: 'About',
            slug: "/about",
            active: true,
        }
    ]
    return (
        <header className='header'>
            <Container>
                <nav className='nav'>
                <ul className='nav-item border'>
                        {navItems.map((item) =>
                            item.active ? (
                            <li className='' key={item.name}>
                                <a href={`${item.slug}`}>{item.name} </a>
                               
                            </li>
                            ) : null
                        )}
                        
                    </ul>
                </nav>
            </Container>
        </header>

        // <header className='h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20 rounded-lg border border-red-400'>
        //     <Container>
        //         <nav className='flex items-center'>
        //             <div className='flex gap-2 mr-4 items-center hover:text-red-600 transition-all ease-in-out duration-300'>
        //                 <Link to='/'>
        //                     <Logo width='70px' />
                            
        //                 </Link>
        //                 <span className='text-red-400'>CodeVillagers</span>
        //             </div>
        //             <ul className='flex ml-auto'>
        //                 {navItems.map((item) =>
        //                     item.active ? (
        //                     <li className='hover:text-red-600 transition-all ease-in-out duration-300' key={item.name}>
        //                         <button 
        //                         onClick={() => navigate(item.slug)}
        //                         className='inline-bock px-6 py-2 duration-200  rounded-full'
        //                         >
        //                             {item.name}
        //                         </button>
        //                     </li>
        //                     ) : null
        //                 )}
        //                 {authStatus && (
        //                     <li>
        //                         <LogoutBtn />
        //                     </li>
        //                 )}
        //             </ul>
        //         </nav>
        //     </Container>
        // </header>
    )
}

export default Header