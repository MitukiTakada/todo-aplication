import React from 'react'
import mainImage from "../images/main-image.jpeg"

const Home = () => {
  return (
    <div className="h-full mt-16 flex relative flex-wrap">
      <div className="md:my-36 lg:ml-20 z-20">
        <h1 className="font-bold text-5xl text-center md:text-left lg:text-7xl md:text-6xl"
        >Welcome<br/> to my <br/>portfolio!
        </h1>
        <button className="contact-btn ">
          <span>お問い合わせ</span>
        </button>
      </div>
    </div>
  )
}

export default Home