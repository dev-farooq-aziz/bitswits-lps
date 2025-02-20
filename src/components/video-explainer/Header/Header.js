import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from "@/styles/video-explainer/Header.module.css"
// Images
import logo from "/public/images/icons/footerlogo.webp";
import flagIcon from "/public/videoexplainer/flag-icon.png";
import chatIcon from "/public/videoexplainer/cht-icon.png";
import { FaEnvelope } from 'react-icons/fa';

const VideoHeader = () => {
    return (
        <>
            <header className={`pt-4 ${styles.header}`}>
                <Container>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className={styles.logo}>
                            <Image src={logo} alt='Bitswits' className={`img-fluid`} />
                        </div>
                        <div className={`d-flex align-items-center gap-lg-4`}>
                            <div>
                                <a href="mailto:info@xyz.com" className={`${styles.btn} d-lg-flex align-items-center d-none`}>
                                    <FaEnvelope className='me-2 d-lg-block d-none' />
                                    info@xyz.com
                                </a>
                            </div>
                            <div>
                                <a href="tel:0123456789" className={`${styles.btn} d-flex align-items-center`}>
                                    <Image src={flagIcon} alt='US Flag' className='me-2 d-sm-block d-none   ' />
                                    (012) 345 6789
                                </a>
                            </div>
                            <div>
                                <a href='javascript:$zopim.livechat.window.show();' className={`${styles.btn} d-lg-flex align-items-center d-none`}>
                                    <Image src={chatIcon} lt='Chat Icon' className={`me-2 ${styles.chatIcon}`} />
                                    Live Chat
                                </a>
                            </div>
                            <div>
                                <Link href="#href" className={`${styles.popupBtn} d-lg-flex align-items-center d-none`}>Get Started</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default VideoHeader