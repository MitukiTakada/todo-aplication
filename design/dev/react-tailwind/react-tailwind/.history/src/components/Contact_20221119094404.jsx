import React from 'react'

const Contact = () => {
  return (
   <div className="container mt-10 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full  h-screen">
     <section className="w-full">
       <h2 className="secondary-title">お問い合わせ</h2>
       <p className="section-paragraph">気になるかたはお問い合わせください</p>
      <div>
        <div>
          <h3 className="font-semibold">お名前</h3>
          <input type="text" className="w-5/6/>
        </div>
        <div>
          <h3>メールアドレス</h3>
          <input type="text" />
        </div>
        <div>
          <h3>メッセージ</h3>
          <input type="text" />
        </div>
        <button>返信する</button>
      </div>
     </section>
   </div>
  )
}

export default Contact