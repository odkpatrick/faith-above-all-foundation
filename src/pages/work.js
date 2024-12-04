import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import * as styles from "./work.module.css"

const Drive = (props) => {
    return (
        <Link href="" className={styles.driveLink}>
            <div className={styles.driveLinkWrapper}>
                <img src={props.imgSrc} alt={props.description+" photo"} />
                <div>
                    <h2>{props.drive}</h2>
                    <p>{props.description}</p>
                    <p>{ props.date ? props.date : "" }</p>
                    <button>View Gallery</button>
                </div>
            </div>
        </Link>
    )
}

const Drives = () => {
    const drives = [
        {
            drive: "The Gem Foundation Visit",
            description: "Our latest drive: Celebrating Easter with the abandoned Special needs children at the Gem foundation.",
            imgSrc: "/drives/Easter_GemFoundation/image(2).jpg",
            date: ""
        },
        {
            drive: "Cancer Run",
            description: "FAAF participating in the cancer run Organized by Uganda Cancer Institute Mulago with an aunt of building a permanent care home for cancer patients at the Institute",
            imgSrc: "/drives/CancerRun_UgandaCancerInstitute/IMG-20240204-WA0005.jpg",
            date: ""
        },
        {
            drive: "The St Lilian Jubilee home visit",
            description: "FAAF partnering with Bora Minds foundation at St Lilian Jubilee home, for Children with disabilities",
            imgSrc: "/drives/BoraMindsFoundation_StLilianJubileeHome/image.jpg",
            date: ""
        },
        {
            drive: "Our fundraising dinner",
            description: "Items we got from our fundraising dinner going towards food support cause for patients at Uganda Cancer Institute Mulago",
            imgSrc: "/drives/FundraisingDinner/itemswegotfromourfundraisingdinnergoingtowardsfood/7T8A9110.jpg",
            date: "April, 2023"
        },
        {
            drive: "Food donation drive for cancer Patients at Uganda Cancer Institute Mulago.",
            description: "Giving warmth and comfort to Patients at Uganda Cancer Institute. Some of the items we gave them included blankets, scarfs, soaks, Toilet paper, hand sanitizer and more.",
            imgSrc: "/drives/Patients_UgandaCancerInstitute/drive_1_3.jpg",
            date: "October, 2021"
        }
    ]

    return (
        <div className={styles.drivesWrapper}>
            {drives.map((member, index) => (
                <Drive 
                drive={member.drive}
                description={member.description}
                imgSrc={member.imgSrc}
                date={member.date}
                />
            ))}
        </div>
    )

}

const WorkPage = () => {
    return (
        <Layout
            active={"work"}
            backgroundColor={"#8E44AD"}
            btnBackgroundColor={"#480a7f"}
        >
            <section>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>Our Work</h1>
                </div>
            </section>
            <section className={styles.drives}>
                <Drives />
            </section>
            <section>
                <div className={styles.learnMoreWrapper}>
                    <h2>Learn more..</h2>
                    <Link href="/about">About<FontAwesomeIcon icon={faArrowRight} /></Link>
                    <Link href="/contact">Contact<FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="Our Work" />

export default WorkPage
