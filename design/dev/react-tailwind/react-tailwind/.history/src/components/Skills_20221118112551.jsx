import React from 'react'
import { SiJavascript } from "react-icons/si";


const Skills = () => {
  return (
    <div className="h-screen pt-16">
      <div className="container mt-10 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full h-5/6"> 
      <section className="w-full ">
        <h2 className="secondary-title">Skill Stack</h2>
        <p className="section-paragraph">I use these skills</p>
        <div className="my-16">
          <div className="w-full border border-gray-400">
            <div>
              <SiJavascript className="text-7xl text-yellow-400"/>
            </div>
            <div>
              <h3>Javascript</h3>
              <div>ウェブサイト制作</div>
              <div>フロントエンド開発</div>
              <p>基本的な分ポジこ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Skills