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

            <h1 className={Style.subHeader}>Social Media Management</h1>

            <h1 className={Style.subHeader}>Account Creation</h1>

            <h1 className={Style.subHeader}>Post Packages</h1>
            <p>Site hosting comes with monthly reports of data.</p>

            <h1 className={Style.subHeader}>Algorithm Optimization</h1>
            <p>Using data-driven insights</p>

            <h1 className={Style.subHeader}>Social Media Advertising</h1>
            <p>We can help you create and manage your social media ads to reach your target audience.</p>

          </div>
    </div>
  )
}

export default page