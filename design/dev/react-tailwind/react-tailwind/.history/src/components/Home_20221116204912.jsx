import React from 'react'
import {FontAwesomeIcon} from ""

const Home = () => {
  return (
    <div className="h-full my-16 flex ">
      <div className="md:my-36">
        <h1 className="font-bold text-5xl text-center md-te"
        >Welcome<br/> to my <br/>portfolio!
        </h1>
        <button className="contact-btn ">
          <span>お問い合わせ</span>
        </button>
      </div>
      <img src="src/image/main-img.jpeg" alt=""  className="h-20 w-5/6"/>
    </div>
  )
}

export default Home