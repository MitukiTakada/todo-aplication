import React from 'react'


const Home = () => {
  return (
    <div className="h-full my-16 flex ">
      <div className="md:my-36 lg:ml-20">
        <h1 className="font-bold text-5xl text-center md:text-left lg:text-7xl md:text-6xl"
        >Welcome<br/> to my <br/>portfolio!
        </h1>
        <button className="contact-btn ">
          <span>お問い合わせ</span>
        </button>
      </div>
      <img src="./ima" alt=""  className="h-20 w-5/6"/>
    </div>
  )
}

export default Home