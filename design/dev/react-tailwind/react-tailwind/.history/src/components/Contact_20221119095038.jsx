import React from 'react'

const Contact = () => {
  return (
   <div className="container mt-10 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full  h-screen">
     <section className="w-full">
       <h2 className="secondary-title">お問い合わせ</h2>
       <p className="section-paragraph">気になるかたはお問い合わせください</p>
      <div className=" grid grid-cols-2 sm:grid-cols-1">
        <div className="space-y-6">
          <div className="space-y-5">
            <h3 className="font-semibold">お名前</h3>
            <input type="text" className="w-full px-3 py-2 bg-slate-400 rounded"/>
          </div>
          <div className="space-y-5">
          <h3 className="font-semibold">メールアドレス</h3>
            <input type="text" className="w-full px-3 py-2 bg-slate-400 rounded"/>
          </div>
          <div className="space-y-5">
          <h3 className="font-semibold">メッセージ</h3>
            <input type="text" className="w-full px-3 py-2 bg-slate-400 rounded"/>
          </div>
          <button>送信する</button>
        </div>
        <div>
        </div>
      </div>
     </section>
   </div>
  )
}

export default Contact