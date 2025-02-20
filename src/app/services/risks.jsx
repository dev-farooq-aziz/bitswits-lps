import ButtonCommon from "@/src/components/common/button"

import Link from "next/link"
import styles from "@/styles/services/risks.module.scss"
import { Col, Container, Row } from "react-bootstrap"



const Risks = ({ data }) => {
    return (
        <section className={`${styles.riskSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={12} md={12} className="my-auto text-center">
                        <div className={styles.customTitle}>
                            {data?.title}
                        </div>
                        <p>{data?.text}</p>

                        <ButtonCommon txt="Free Consultation" />
                        <div className={styles.flexBtn}>
                            <div className={styles.telNumber}>
                                <Link href="tel:0123456789">(012) 345 6789</Link>
                            </div>
                            <div className={styles.emailAddress}>
                                <Link href="mailto:info@xyz.com">info@xyz.com</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Risks