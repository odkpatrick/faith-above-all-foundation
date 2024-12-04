import * as React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faBank, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./index.module.css"

const FeaturedWork = (props) => {
  return (
    <Link href={props.link} className={styles.featuredWorkLink}>
      <div>
        <img src={props.imgSrc} alt={props.imgTitle} width={338} height={315} />
        <p>{props.description}</p>
        <Link href={props.link}>Learn more<FontAwesomeIcon icon={faArrowRight} /></Link>
      </div>
    </Link>
  )
}

const DonateOption = props => {
  return (
    <div className={styles.donateOption}>
      <FontAwesomeIcon icon={props.icon} />
      <p>{props.userOption}</p>
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout 
      backgroundColor={"#3498DB"} 
      btnBackgroundColor={"#1f5b83"}
    >
      <section>
        <div className={styles.heroWrapper}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              Faith Above All Foundation
            </h1>
            <p>
              Changing lives through creating awareness, providing
              resources, hope and love to those living with
              chronic/long-term illnesses.
            </p>
            <Link href="/work" className={styles.callToAction}><span>See our work</span><FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div>
            <div>
              <Slideshow />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutWrapper}>
          <h2 className={styles.aboutTitle}>We are</h2>
          <p className={styles.aboutBrief}>
            A dedicated NGO focused
            on creating awareness, providing essential resources, hope,
            love and care for individuals living with chronic and long
            term illnesses.
          </p>
          <p className={styles.aboutBrief}>
            We seek to enhance the quality of lives of
            patients through support, education and advocacy, ensuring
            they have access to the necessary emotional, medical and
            social resources by fostering a compassionate and supportive
            community. Faith Above All Foundation aims to bring hope and
            improved well being to those affected by chronic conditions.
          </p>
          <Link href="/about" className={styles.learnMore}>Learn more<FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
      </section>
      <section className={styles.featured}>
        <div className={styles.featuredWrapper}>
          <h2 className={styles.featuredTitle}>Featured Drives</h2>
          <div className={styles.featuredLinks}>
            <FeaturedWork
              imgSrc="/drives/Easter_GemFoundation/drive_4.jpg"
              imgTitle="Easter GemFoundation"
              description="Our latest drive ( celebrating Easter with the abandoned Special needs children at the Gem foundation)"
              link="/work"
            />
            <FeaturedWork
              imgSrc="/drives/CancerRun_UgandaCancerInstitute/IMG-20240204-WA0005.jpg"
              imgTitle="Cancer Run"
              description="FAAF participating in the cancer run Organized by Uganda Cancer Institute Mulago with an aunt of building a permanent care home for cancer patients at the Institute"
              link="/work"
            />
          </div>
          <Link className={styles.seeWork} href="/work">See all our work<FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
      </section>
      <section className={styles.donate}>
        <div className={styles.donateWrapper}>
          <h2 className={styles.donateTitle}>Donate or Volunteer</h2>
          <div className={styles.donateOptions}>
            <DonateOption userOption="Mobile Money" icon={faMobileAlt} />
            <DonateOption userOption="Paypal" icon={faPaypal} />
            <DonateOption userOption="Direct Transfer" icon={faBank} />
          </div>
          <div className={styles.donateCallToActions}>
            <Link href="/get-involved">donate<FontAwesomeIcon icon={faArrowRight} /></Link>
            <Link href="/get-involved">volunteer<FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
