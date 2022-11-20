import React from 'react'
import { FaTwitter } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";

const Contact = () => {
  return (
   <div className="container mt-10 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full  h-screen">
     <section className="w-full">
       <h2 className="secondary-title">お問い合わせ</h2>
       <p className="section-paragraph">気になるかたはお問い合わせください</p>
      <div className=" grid sm:grid-cols-2 grid-cols-1">
        <div className="space-y-6">
          <div className="space-y-5">
            <h3 className="font-semibold">お名前</h3>
            <input type="text" className="w-full px-3 py-2 bg-slate-300 rounded text-black"/>
          </div>
          <div className="space-y-5">
          <h3 className="font-semibold">メールアドレス</h3>
            <input type="text" className="w-full px-3 py-2 bg-slate-300 rounded text-black"/>
          </div>
          <div className="space-y-5">
          <h3 className="font-semibold">メッセージ</h3>
            <input type="text" className="w-full px-3 py-2 bg-slate-300 rounded text-black"/>
          </div>
          <div className="text-center">
            <button className="send-btn mt-0">送信する</button>
          </div>
        </div>
        <div>
          <p>000-1111-2222</p>
          <p>mituki123580@icloud.com</p>
          <div>
            <a href="">
              <FaTwitter  className="text-blue-400"/>
            </a>
            <a href="">
              <FaInstagram className="text-orange-400"/>
            </a>
            <a href="">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
     </section>
   </div>
  )
}

export default Contact