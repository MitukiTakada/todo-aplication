import React from 'react'
import { Link } from 'react-router-dom'
import "./output.css"
import {HamburgerIcon} from "@chakra-ui/icons"

const Header = () => {
  return (
    <header className="h-20 flex justify-between px-7 py-10 w-full items-center">
      <div>
        <h2 className="text-3xl font-bold">TKD Porfolio</h2>
      </div>
      <nav className="flex space-x-8 text-2xl ml-8 items-center hidden sm:block">
        <Link to={"/home"} className="link">Home</Link>
        <Link to={"/profile"} className="link">Profile</Link>
        <Link to={"/products"} className="link">Products</Link>
        <Link to={"/skills"} className="link">Skills</Link>
        <a href="#contact" className="ml-5">
          <button className="contact-btn">お問い合わせ</button>
        </a>
      </nav>
      <div className="lg:hidden">
        <HamburgerIcon h={30} w={30}/>
      </div>
    </header>
  )
}

export default Header