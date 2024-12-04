import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faBank } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import * as styles from "./get-involved.module.css"

const GetInvolvedPage = () => {
    return (
        <Layout
            active={"get-involved"}
            backgroundColor={"#E67E22"}
            btnBackgroundColor={"#7b5312"}
        >
            <section>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>Get Involved</h1>
                </div>
            </section>
            <section className={styles.donate}>
                <div className={styles.donateWrapper}>
                    <img src="/images/katie-rainbow-KG7CCyD0-QE-unsplash.jpg" alt="Envelop" />
                    <div>
                        <h2>Donate via</h2>
                        <div>
                            <div>
                                <h3>Mobile Money</h3>
                                <div className={styles.mobileMoney}>
                                    <div>
                                        <h4>MTN MoMo</h4>
                                        <img src="/logos/mtn-momo.png" alt="MTN mobile money logo" />
                                    </div>
                                    <p>+256 782 710 434</p>
                                </div>
                                <div className={styles.mobileMoney}>
                                    <div>
                                        <h4>Airtel Money</h4>
                                        <img src="/logos/airtel-money-logo.png" alt="Airetl mobile money logo" />
                                    </div>
                                    <p>+256 704 676 728</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Paypal</h3>
                                    <div className={styles.paypalDetails}>
                                        <img src="/logos/paypal-logo.png" alt="Paypal logo" />
                                        <button>Set up transfer</button>
                                    </div>
                                </div>
                                <div>
                                    <h3>Direct Transfer</h3>
                                    <div className={styles.bankDetails}>
                                        <FontAwesomeIcon icon={faBank} />
                                        <button>View Account details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.volunteer}>
                <div className={styles.volunteerWrapper}>
                    <h2>Or Volunteer</h2>
                    <p>Help out with our upcoming projects, simply drop us a message, along with a contact detail.</p>
                    <Link href="/contact">Message Us<FontAwesomeIcon icon={faArrowRight} /></Link> 
                </div>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="Get Involved" />

export default GetInvolvedPage
