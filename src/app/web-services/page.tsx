import React from 'react'
import Style from './page.module.scss'

const page = () => {
  return (
    <div>
        <div className={Style.webHero}>
            <h1>Stand-Out Web Service</h1>
        </div>

        <div className={Style.blurb}>

          <p>We are here to make your page stand out</p>
        </div>

        <div className={Style.webServices}>
            
            
            <p>We offer a variety of web services to help you grow your business online. From web design and development to SEO and online ads, we have you covered.</p>
            <p>Our team of experts will work with you to create a custom solution that meets your needs and helps you achieve your goals.</p>

            <br />

            <h1 className={Style.subHeader}>Website Design</h1>

            <h1 className={Style.subHeader}>Website Development</h1>

            <h1 className={Style.subHeader}>Site Hosting & Analysis</h1>
            <p>Site hosting comes with monthly reports of data.</p>

            <h1 className={Style.subHeader}>Content Creation</h1>

            <h1 className={Style.subHeader}>SEO Optimization</h1>
            
            <h1 className={Style.subHeader}>Mailing Lists</h1>

          </div>
    </div>
  )
}

export default page