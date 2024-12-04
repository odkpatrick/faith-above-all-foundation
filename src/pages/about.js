import * as React from "react"
import Layout from "../components/layout"
import Location from "../components/location"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import * as styles from "./about.module.css"

const TeamMember = (props) => {
    return (
        <div className={styles.teamMember}>
            <img src={props.imgSrc} alt={props.mPosition + ", " + props.mName} />
            <div>
                <h3>{props.mPosition}</h3>
                <p>{props.mName}</p>
            </div>
        </div>
    )
}

const Team = () => {
    const members = [
        {
            mPosition: "Country Director & Head Of Programs",
            mName: "Stella Nambabubye",
            imgSrc: "/team/Country Director & Head of Programs/IMG-20240628-WA0005~2.jpg"
        },
        {
            mPosition: "Director Of Community Engagement",
            mName: "Atim Diana",
            imgSrc: "/team/Director Community Engagement/IMG-20240628-WA0006.jpg"
        },
        {
            mPosition: "Director Of Communication",
            mName: "Angella Nassimbwa",
            imgSrc: "/team/Director of Communication/IMG-20240709-WA0001.jpg"
        },
        {
            mPosition: "Director Of Welfare & Hospitality",
            mName: "Joanita Senfuma",
            imgSrc: "/team/Director of Welfare and Hospitality/IMG-20240708-WA0005.jpg"
        },
        {
            mPosition: "Executive Director",
            mName: "Ann Iga",
            imgSrc: "/team/Executive Director/Screenshot_20240709-014108~2.png"
        },
        {
            mPosition: "Head Of Finance & Accounting",
            mName: "Kalekezi Meg M",
            imgSrc: "/team/Head of Finance/IMG-20240701-WA0022.jpg"
        },
        {
            mPosition: "Operations/H.R Director",
            mName: "Betty Nabwire",
            imgSrc: "/team/Operations and human resource Director/IMG-20240627-WA0004.jpg"
        },
        {
            mPosition: "Social Media Manager",
            mName: "Nasuuna Gloria",
            imgSrc: "/team/Social Media Manager/IMG-20240703-WA0002.jpg"
        },
        {
            mPosition: "Volunteer & S.S Manager",
            mName: "Anna Nabanoba",
            imgSrc: "/team/Volunteer and social services Manager/IMG-20240630-WA0001.jpg"
        }
    ]

    return (
        <div className={styles.teamMembersWrapper}>
            {members.map((member, index) => (
                <TeamMember
                    key={index}
                    mPosition={member.mPosition}
                    mName={member.mName}
                    imgSrc={member.imgSrc}
                />
            ))}
        </div>
    )
}

const Sponsor = (props) => {
    return (
        <div className={styles.sponsor}>
            <img src={props.imgSrc} alt={props.name + " logo"} />
            <p>{props.name}</p>
            <Link href={props.link}>Visit<FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
    )
}

const AboutPage = () => {
    return (
        <Layout 
            active={"about"}
            backgroundColor={"#1ABC9C"} 
            btnBackgroundColor={"#287261"}    
        >
            <section>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>About Us</h1>
                </div>
            </section>
            <section className={styles.about}>
                <div className={styles.aboutWrapper}>
                    <div className={styles.aboutImgWrapper}>
                        <img src="/drives/FundraisingDinner/dd25a81f-2219-40b3-a311-7c23f2d3dc2d.jpg" alt="Team" />
                    </div>
                    <div className={styles.aboutContent}>
                        <h2>Our Mission</h2>
                        <p>Changing lives through creating awareness, providing
                            resources, hope and love to those living with
                            chronic/long-term illnesses.</p>
                        <h2>History</h2>
                        <p>Founded in 2021, Faith Above All Foundation (FAAF) is
                            dedicated to helping individuals affected by chronic and
                            long term illnesses like cancer, HIV, Sickle cells disease,
                            the disabled people among others.
                        </p>
                        <p>Based in the United States with  a branch in Uganda, FAAF
                            was established to provide comprehensive support, resources
                            and care to those in need.
                        </p>
                        <p>The foundation operates primarily on voluntary donations
                            from generous individuals and supportive organizations,
                            enabling it to offer vital assistance and foster a nurturing
                            community for patients and their families. Through its efforts,
                            Faith Above All Foundation aims to bring hope, love and
                            improved quality of life to those living with chronic
                            conditions.
                        </p>
                        <Link href="/contact">Get in touch<FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.teamAndPartners}>
                    <div className={styles.teamWrapper}>
                        <h2>The Team</h2>
                        <Team />
                        <Link href="/work">See our work<FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                    <div className={styles.partnersWrapper}>
                        <h2>Partners & Sponsors</h2>
                        <div>
                            <Sponsor name="BORA Minds Foundation" imgSrc="/logos/bora_minds_foundation.jpg" link="" />
                            <Sponsor name="Uganda Cancer Institute" imgSrc="/logos/uganda_cancer_institute.png" link="" />
                            <Sponsor name="Charlie Mugga Teenage Cancer Initiative" imgSrc="/logos/charlie_mugga_teenage_cancer_initiative.jpg" link="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.mapContact}>
                <div className={styles.mapContactWrapper}>
                    <div className={styles.contactWrapper}>
                        <h2>Contact Us</h2>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <p>+256 704 676728</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <p>+256 782 710434</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>faithaboveall02@gmail.com</p>
                            </div>
                            <Link href="/contact">Drop us a Message<FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                    <div className={styles.mapWrapper}>
                        <h2>Our main office</h2>
                        <Location />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="About Us" />

export default AboutPage
