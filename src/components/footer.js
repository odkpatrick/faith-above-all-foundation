import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faEnvelope, faPhone, faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import * as styles from "./footer.module.css"

const Footer = () => {
    const mySubmitFunction = (e) => {
        e.preventDefault();
        return false;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContentWrapper}>
                <div>
                    <div className={styles.footerContentTop}>
                        <div>
                            <img src="/logos/F.A.A.F/logo_2.png" alt="Logo" className="footer-logo" width={120} height={120} />
                        </div>
                        <div>
                            <h4>Contact<span></span></h4>
                            <div>
                                <div className={styles.contactIcons}>
                                    <FontAwesomeIcon icon={faLocationPin} />
                                    <p>Kampala, Bukoto opposite FAWE</p>
                                </div>
                                <div className={styles.contactIcons}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <p>+256 704 676728</p>
                                </div>
                                <div className={styles.contactIcons}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <p>+256 782 710434</p>
                                </div>
                                <div className={styles.contactIcons}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p>faithaboveall02@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerContentBottom}>
                        <div>
                            <h4>Follow<span></span></h4>
                            <div className={styles.socialIcons}>
                                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <span style={{backgroundImage: `url('/logos/svgs/facebook_color.svg')`}}></span>
                                </Link>
                                <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <span style={{backgroundImage: `url('/logos/svgs/twitter_color.svg')`}}></span>
                                </Link>
                                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <span style={{backgroundImage: `url('/logos/svgs/instagram_color.svg')`}}></span>
                                </Link>
                                <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <span style={{backgroundImage: `url('/logos/svgs/youtube_color.svg')`}}></span>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4>Subscribe for updates<span></span></h4>
                            <form
                            onSubmit={mySubmitFunction}
                            >
                                <input type="email" name="email" placeholder="example@email.com" />
                                <button type="submit">Subscribe<FontAwesomeIcon icon={faArrowRight} /></button>
                            </form>
                        </div>
                    </div>
                </div>
                <p className={styles.finePrint}>&copy; 2024 Faith Above All Foundation. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer
