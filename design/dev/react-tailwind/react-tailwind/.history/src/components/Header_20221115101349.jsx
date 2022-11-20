import React from 'react'
import { Link } from 'react-router-dom'
import "./output.css"

const Header = () => {
  return (
    <header className="h-20 flex justify-between p-7 w-full">
      <h2 className="text-3xl font-bold">TKD Porfolio</h2>
      <div className="flex space-x-4 text-2xl">
        <Link tp={"/home"} className="link">Home</Link>
        <Link to={"/profile"} className="link">Profile</Link>
        <Link to={"/products"} className="link">Products</Link>
        <Link to={"/skills"} className="link">Skills</Link>
      </div>
      <div className="hidden sm:block">

      </div>
    </header>
  )
}

export default Header