import styles from "@/styles/layout/copyright.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import DMCA from "media/dmca.webp"


const CopyRight = () => {
    return (
        <section className={`${styles.copyrigthSection} bgBlack`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={7} className="my-auto">
                        <div className={styles.copyrightBox}>
                            <div className={styles.copyrightTxt}>
                                <p>Copyright © 2024 BitsWits. <br /> Brand Of Bhaoo Incorporation Company</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={5} className="my-auto">
                        <div className={styles.copyrightTxt1}>
                            <div className={styles.dmcsImg}>
                                <Image src={DMCA.src} alt="Bitswits Services" width={120} height={60} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CopyRight