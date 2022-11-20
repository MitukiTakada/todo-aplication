import React from 'react'
import { Link } from 'react-router-dom'
import "./output.css"

const Header = () => {
  return (
    <header className="h-20 flex justify-between p-7">
      <h2 className="text-3xl font-bold">TKD Porfolio</h2>
      <div className="flex space-x-4 text-2xl">
        <Link tp={"/home"} className="hover:text-purple-400 transition-all duration-300">Home</Link>
        <Link to={"/profile"} className="hover:text-purple-400 transition-all duration-300">Profile</Link>
        <Link to={"/products"} className="hover:text-purple-400 transition-all duration-300">Products</Link>
        <Link to={"/skills"} className="hover:text-purple-400 transition-all duration-300">Skills</Link>
      </div>
    </header>
  )
}

export default Header