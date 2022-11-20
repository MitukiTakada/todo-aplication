import React from 'react'
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";


const Skills = () => {
  return (
    <div className="h-full py-16">
      <div className="container mt-10 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full h-5/6"> 
      <section className="w-full ">
        <h2 className="secondary-title">Skill Stack</h2>
        <p className="section-paragraph">I use these skills</p>
        <div className="my-16">
          <div className="w-full border border-gray-400 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-400 duration-300 transition-all cursor-pointer mb-10">
            <div className="mg-6 lg:mb-0 self-center">
              <SiJavascript className="text-8xl text-yellow-400"/>
            </div>
            <div className="text-center flex-wrap flex lg:text-left lg:block justify-center">
              <h3 className="text-3xl font-semibold">Javascript</h3>
              <div className="flex-wrap flex w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                <div className="badge">ウェブサイト制作</div>
                <div className="badge">フロントエンド開発</div> 
              </div>
              <p className="text-secondary">普段はReactを使っています。</p>
            </div>
          </div>
          <div className="w-full border border-gray-400 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-400 duration-300 transition-all cursor-pointer mb-10">
            <div className="mg-6 lg:mb-0 self-center">
              <SiReact className="text-8xl text-blue-400"/>
            </div>
            <div className="text-center flex-wrap flex lg:text-left lg:block justify-center">
              <h3 className="text-3xl font-semibold">React</h3>
              <div className="flex-wrap flex w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                <div className="badge">ウェブサイト制作</div>
                <div className="badge">フロントエンド開発</div> 
              </div>
              <p className="text-secondary">普段はReactを使っています。</p>
            </div>
          </div>
          <div className="w-full border border-gray-400 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-400 duration-300 transition-all cursor-pointer mb-10">
            <div className="mg-6 lg:mb-0 self-center">
              <SiJavascript className="text-8xl text-blue-400"/>
            </div>
            <div className="text-center flex-wrap flex lg:text-left lg:block justify-center">
              <h3 className="text-3xl font-semibold">Javascript</h3>
              <div className="flex-wrap flex w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                <div className="badge">ウェブサイト制作</div>
                <div className="badge">フロントエンド開発</div> 
              </div>
              <p className="text-secondary">普段はReactを使っています。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Skills