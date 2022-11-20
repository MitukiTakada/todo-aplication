import React from 'react'


const Home = () => {
  return (
    <div className="h-full my-16 flex relative">
      <div className="md:my-36 lg:ml-20">
        <h1 className="font-bold text-5xl text-center md:text-left lg:text-7xl md:text-6xl"
        >Welcome<br/> to my <br/>portfolio!
        </h1>
        <button className="contact-btn ">
          <span>お問い合わせ</span>
        </button>
      </div>
      <img src="https://images.unsplash.com/photo-1512704699053-ca917ea0ba06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTgwfDB8MXxzZWFyY2h8MXx8ZGFyayUyMG1hbnxlbnwwfHx8fDE2Njg1OTc5MDU&ixlib=rb-4.0.3&q=80&w=400" alt="image"  className="md:absolute lg:top-2 lg:right-52 md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto"/>
    </div>
  )
}

export default Home