import { useState } from "react"

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 right-0 flex justify-between items-center text-black
      py-1 px-2 md:py-2 md:px-4 lg:py-4 lg:px-8 bg-white bg-opacity-75 backdrop-blur-sm shadow-lg drop-shadow-md rounded-full 
      w-full max-w-md md:max-w-5xl mx-auto z-10">
      {/* <a href="#">
        <img src="/vite.svg" alt="" className="w-5 md:w-7 lg:w-10 hover:scale-105 transition-all" />
      </a> */}
      <ul className="flex items-center gap-4 font-semibold text-xs md:text-sm lg:text-base mx-auto"> {/* Tambahkan mx-auto */}
        <a href="#home"><li className="p-2 hover:bg-red-600 hover:text-white rounded-full transition-all">Home</li></a>
        <a href="#services"><li className="p-2 hover:bg-red-600 hover:text-white rounded-full transition-all">Services</li></a>
        <a href="#gallery"><li className="p-2 hover:bg-red-600 hover:text-white rounded-full transition-all">Gallery</li></a>
        <a href="#contact"><li className="p-2 hover:bg-red-600 hover:text-white rounded-full transition-all">Contact</li></a>
      </ul>
    </header>
  )
}

export default Navbar;