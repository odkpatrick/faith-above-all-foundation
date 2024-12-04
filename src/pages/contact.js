import * as React from "react"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import Location from "../components/location"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocationPin } from "@fortawesome/free-solid-svg-icons"
import * as styles from "./contact.module.css"

const ContactPage = () => {
    return (
        <Layout
            active={"contact"}
            backgroundColor={"#2ECC71"}
            btnBackgroundColor={"#3f6a11"}
        >
            <section>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>Contact</h1>
                </div>
            </section>
            <section>
                <div className={styles.contactWrapper}>
                    <img src="/images/kate-macate-xmddEHyCisc-unsplash.jpg" alt="Envelop" />
                    <div>
                        <h2>Get in touch</h2>
                        <div>
                            <h3>Pay us a visit</h3>
                            <div>
                                <FontAwesomeIcon icon={faLocationPin} />
                                <p>Kampala, Bukoto opposite FAWE</p>
                            </div>
                        </div>
                        <div>
                            <h3>Email us</h3>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>faithaboveall02@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <h3>Give us a call</h3>
                            <div>
                                <FontAwesomeIcon icon={faPhone} />
                                <div>
                                    <p>+256 704 676728</p>
                                    <p>+256 782 710434</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.messageLocationWrapper}>
                    <div>
                        <h2>Send us a message</h2>
                        <ContactForm />
                    </div>
                    <div>
                        <h2>Location</h2>
                        <div>
                            <Location />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
