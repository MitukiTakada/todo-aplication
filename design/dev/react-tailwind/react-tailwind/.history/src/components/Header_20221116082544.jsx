import React from 'react'
import { Link } from 'react-router-dom'
import "./output.css"

const Header = () => {
  return (
    <header className="h-20 flex justify-between px-7 py-10 w-full">
      <div>
        <h2 className="text-3xl font-bold">TKD Porfolio</h2>
      </div>
      <nav className="flex space-x-8 text-2xl ml-8 items-center sm:hidden">
        <Link to={"/home"} className="link">Home</Link>
        <Link to={"/profile"} className="link">Profile</Link>
        <Link to={"/products"} className="link">Products</Link>
        <Link to={"/skills"} className="link">Skills</Link>
        <a href="#contact" className="ml-5">
          <button className="contact-btn">お問い合わせ</button>
        </a>
      </nav>
      <div className="block">

      </div>
    </header>
  )
}

export default Header