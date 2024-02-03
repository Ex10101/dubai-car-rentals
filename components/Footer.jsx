import React from 'react'

function Footer() {
  return (
    <footer className='w-full h-60 bg-red-900 text-white text-2xl flex flex-row justify-between items-center'>
      <p className="tracking-wider w-96 ml-20">© Dubai Sport Cars 2024</p>
      <div className='flex flex-col h-[138px] w-96 justify-evenly'>
        <p>Contacts:</p>
        <hr className="w-80" />
        <p>Email: contact@dsc.com</p>
        <p>Phone: +971 2 441 4666</p>
      </div>
      <div className='flex flex-col h-[138px] w-96 justify-evenly'>
        <p>About</p>
        <p>Catalogue</p>
        <p>Contact page</p>
      </div>
    </footer>
  )
}

export default Footer