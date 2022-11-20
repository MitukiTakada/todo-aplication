import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from "@fortawesome/free-solid-svg-icons";


const Skills = () => {
  return (
    <div className="h-screen pt-16">
      <div className="container mt-10 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full h-5/6"> 
      <section className="w-full ">
        <h2 className="secondary-title">Skill Stack</h2>
        <p className="section-paragraph">I use these skills</p>
        <div className="my-16">
          <div className="w-full border border-gray-400">
            <FontAwesomeIcon icon="fa-brands fa-square-js" />
            <FontAwesomeIcon icon={faJs} />
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Skills