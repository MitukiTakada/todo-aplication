import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="container mt-10 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full h-5/6"> 
      <section className="w-full ">
        <h2 className="secondary-title">My Portfolio</h2>
        <p className="section-paragraph">These are products I've created</p>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 sm:grid-cols-1">
          <a href="">
            <img src={productImage1} alt="" className="w-full h-36 lg:h-60 object-cover cursor-pointer rounded-lg ransition-all duration-300 hover:translate-y-2 sm:h-72"/>
          </a>
          <a href="">
            <img src={productImage2} alt="" className="w-full h-36 lg:h-60 object-cover cursor-pointer rounded-lg ransition-all duration-300 hover:translate-y-2 sm:h-72"/>
          </a>
          <a href="">
            <img src={productImage3} alt="" className="w-full h-36 lg:h-60 object-cover cursor-pointer rounded-lg ransition-all duration-300 hover:translate-y-2 sm:h-72"/>
          </a>
          <a href="">
            <img src={productImage4} alt="" className="w-full h-36 lg:h-60 object-cover cursor-pointer  rounded-lg ransition-all duration-300 hover:translate-y-2 sm:h-72"/>
          </a>
          <a href="">
            <img src={productImage5} alt="" className="w-full h-36 lg:h-60 object-cover cursor-pointer rounded-lg ransition-all duration-300 hover:translate-y-2 sm:h-72"/>
          </a>
          <a href="">
            <img src={productImage6} alt="" className="w-full h-36 lg:h-60 object-cover cursor-pointer rounded-lg transition-all duration-300 hover:translate-y-2 sm:h-72"/>
            <p className="section-paragraph">aaaa</p>
          </a>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Profile