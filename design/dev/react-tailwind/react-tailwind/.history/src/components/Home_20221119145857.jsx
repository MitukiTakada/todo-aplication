import React from 'react'
import mainImage from "../images/main-image.jpeg"
import "./Home.css";
import userImage from "../images/user.jpg"

const Home = () => {
  return (
    <div className="home ">
      <div className="items-center ">
        <h1 className=" font-semibold text-3xl 100v text-center text-slate-200 lg:text-7xl md:text-5xl">Welcome to my portfolio!</h1>
      </div>
      <div className="flex mx-auto px-24 space-x-10">
        <img src={userImage} alt="" className="h-16 w-16 rounded-full"/>
        <div className="space-y-4 section-paragraph">
          <p>
            はじめまして！名城大学外国語学部に通う大学3年生のmitsukiです。大学では英語を中心に勉強しており、1年間の勉強の末、TOEIC905点を獲得することができました。
          </p>
          <p>
            プログラミングは2年の冬ごろに学びはじめました。難しく大変なこともありますが、とても新鮮で面白いです！
          </p>
          <p>
            現在はフロントエンド関連の技術を中心に勉強しております。
          </p>
          </div>
      </div>
    </div>
  )
}

export default Home