import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="h-20 flex justify-between p-7">
      <h2 className="text-3xl font-bold">TKD Porfolio</h2>
      <div className="flex">
        <Link tp={"/home"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/skills"}>Skills</Link>
      </div>
    </header>
  )
}

export default Header