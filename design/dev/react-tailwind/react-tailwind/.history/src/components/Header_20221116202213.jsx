import React from 'react'
import { Link } from 'react-router-dom'
import "./output.css"
import Hamburger from './atoms/Hamburger'

const Header = () => {
  return (
    <header className="container h-20 flex justify-between px-7 py-10 w-full items-center mr-0 relative">
      <div>
        <h2 className="text-3xl font-bold md:text-2xl">TKD Porfolio</h2>
      </div>
      <nav className="flex space-x-8 text-xl ml-8 items-center hidden md:block">
        <Link to={"/home"} className="link">Home</Link>
        <Link to={"/profile"} className="link">Profile</Link>
        <Link to={"/products"} className="link">Products</Link>
        <Link to={"/skills"} className="link">Skills</Link>
        <Link to={"/contact"} className="link">Contact</Link>
      </nav>
      <Hamburger className="md:hidden absolute right-3"/>
    </header>
  )
}

export default Header