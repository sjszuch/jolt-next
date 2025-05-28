import React from 'react'
import Style from './page.module.scss'

const page = () => {
  return (
        <div>
        <div className={Style.webHero}>
            <h1>Stand-Out Brand Service</h1>
        </div>

        <div className={Style.blurb}>

          <p>We are here to make your page stand out</p>
        </div>

        <div className={Style.webServices}>
            
            
            <p>We offer a variety of web services to help you grow your business online. From web design and development to SEO and online ads, we have you covered.</p>
            <p>Our team of experts will work with you to create a custom solution that meets your needs and helps you achieve your goals.</p>

            <br />

            <h1 className={Style.subHeader}>Brand Strategy</h1>

            <h1 className={Style.subHeader}>Asset Sheet Creation</h1>



          </div>
    </div>
  )
}

export default page