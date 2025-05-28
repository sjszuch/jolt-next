import Style from "./page.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>

      <div className={Style.topBar}>
        <Navbar />
      </div>

      <div className={Style.hero}>

        <h1 className={Style.heroTitle}>
          JOLT
        </h1>

        <h2 className={Style.heroSubtitle}>
          THE MODERN CREATIVE AGENCY
        </h2>
      </div>

      <div className={Style.container}>


        <div className={Style.sectionA}>

        <h1 className={Style.headerA}>We do...</h1>

        <div className={Style.cardA}>
          <h2 className={Style.boxHead}>WEB DEVELOPMENT.</h2>
          <p><span>Web Development. Web Design. SEO Optimization. Online Ads.</span><br /><br />
            Whether you need a simple landing page, a full e-commerce site, or a custom web application, Jolt has you covered. With
            a strong focus on user experience, high engagement, conversion, and accessibility- you can trust that your site will 
            not only look great, but perform amazing as well.</p>

          <hr />

          <h2 className={Style.boxHead}>SOCIAL MEDIA.</h2>
          <p><span>Account Creation and Optimization. Social Media Management. Custom Media Graphic Bundles. Digital Advertisment Design and Deployment.</span><br /><br />
            Social media is a necessity for any business in today's digital world. Jolt is here to help you disrupt the noise and stand out from the crowd.
            Utilizing the latest trends and proven strategies, we will help you create a strong, engaging social media presence that resonates with your audience and drives results
          </p>
        </div>

        <h1 className={Style.headerAb}>...in a modern way.</h1>


        </div>

        {/* SECTION B */}
        <div className={Style.sectionB}>

        <h1 className={Style.headerB}>Because we value</h1>

        <div className={Style.cardB}>
          <h2 className={Style.boxHead}>RESULTS.</h2>
          <p>Utilizing the latest technology, analytics, and trends to kickstart your online presence is what we do.
            We are commited to delivering measurable results, following industry practices, and using analytic-driven strategies 
            to ensure that your presence is effective, engaging, and long-lasting.
          </p>
          <hr />

          <h2 className={Style.boxHead}>USABILITY.</h2>
          <p>A great relationship with any potential customer starts with a great experience. That's why we take great care to assure
            that everything we create is not only functional, but intuitive, accessible and easy to use. With a history of successful UX and UI
            design, we can help you create a presence that individuals will be drawn to.
          </p>
          <hr />

          <h2 className={Style.boxHead}>IMPACT.</h2>
          <p>Bold design and industry-leading strategies are what we do best. Conversion-driven techniques allow us to create a strong, lasting impact
            across all platforms. You want to make a statement, and we know to make it heard.
          </p>
        </div>

        <h1 className={Style.headerBb}>(it's kinda our thing)</h1>

        </div>

        {/* SECTION C */}
        <div className={Style.sectionA}>

        <h1 className={Style.headerA}>Helping people like you and</h1>

        <div className={Style.cardA}>
          <h2 className={Style.boxHead}>CHEDDA LAFLARE</h2>
          <p>Chedda is a revolutionary Pittsburgh artist, using his passion for music to create impactful and timely tracks that
            resonate with local and global audiences alike. Previously relying on word of mouth, Chedda collaborated with the Jolt team to
            create a modern, engaging, and user-friendly website that showcases his hits, new releases, and upcoming shows. As a result, Chedda
            has seen a significant increase in online engagement, and is able to reach wider audiences with a new digital presence custom-tailored
            to his unique style and brand.
          </p>
          <Link href="https://cheddalaflare.com/" target="_blank" className={Style.quickLink}>Check it out <FaArrowRight /></Link>
        </div>

        <div className={Style.cardA}>
          <h2 className={Style.boxHead}>PENNMAC</h2>
          <p>The legendary Pennsylvania Macaroni Company- located in the historic Pittsburgh Strip District- worked with Jolt staff to 
            revitalize their ecommerce site and inventory administration system. Beginning with a site audit, Jolt was able to keep all
            of the existing content and products while updating the site to allow for responsive design and improved user experience.
            Site updates included a new mobile-friendly navigation system, improved functionality, and new product pages with high-quality 
            photography and engaging descriptions.
          </p>
          <Link href="https://www.pennmac.com/" target="_blank" className={Style.quickLink}>Check it out <FaArrowRight /></Link>
        </div>

        <h1 className={Style.headerAb}>grow your business.</h1>

        </div>

        {/* SECTION D */}
        <div className={Style.sectionB} >

        <h1 className={Style.headerB} id="contactForm">so REACH OUT...</h1>

        <Contact />

                <h1 className={Style.headerBb}>to ENERGIZE YOUR BRAND!</h1>



        </div>



      </div>



    </main>
  );
}
