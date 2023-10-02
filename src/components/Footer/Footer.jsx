import React from 'react'
import {BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (

    <>
    <footer className='h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
      <section className='text-lg'>
        Copyrigth {year}| All right reserved
      </section>
      <section className='flex items-center justify-center gap-4 text-2xl text-white'>
        <a className='hover:text-red-600 transition-all ease-in-out duration-300'>
          <BsInstagram/>
        </a>
        <a className='hover:text-red-600 transition-all ease-in-out duration-300'>
          <BsTwitter/>
        </a>
        <a className='hover:text-red-600 transition-all ease-in-out duration-300'>
          <BsLinkedin/>
        </a>

      </section>

    </footer>
    </>
       
  
  );
  
}

export default Footer