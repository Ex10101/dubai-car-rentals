import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="w-full h-32 flex flex-row items-center justify-between text-2xl">
      <div className="flex flex-row items-center ml-[172px]">
        <Image src={"/nav-image.png"} width={68} height={68} alt='' />
        <h1 className="text-stone-600 font-russo font-bold ml-5">Dubai Sport Cars</h1>
      </div>
      <div className="flex flex-row mr-[199px] font-raleway items-center">
        <Link className='mx-[42px]' href={"/about"}>About Us</Link>
        <Link className='mx-[42px]' href={"/contact"}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar