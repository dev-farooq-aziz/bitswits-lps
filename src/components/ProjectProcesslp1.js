import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/ProjectProcesslp1.module.css'
//images
import banImg1 from '/public/images/projectprocess/process.png'


const ProjectProcesslp1 = (props) => {

    return (
        <>
            <section className={styles[props.processclass]}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='newfycolr font30 f-700 center'>Mobile App Development Project Process</h3>
                            <h2 className='white font50 f-700 center'>Explore Our App Development Journey</h2>
                            <p className='white font16 f-400 center'>Our Work Speaks For Us. See How We Create Powerful, Customer-Centric Mobile Applications <br></br> For Various Industry Verticals To Help Them Achieve Their Business Objectives.</p>
                            <Image src={banImg1} alt='BitsWits' className='img-fluid mt-5' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProjectProcesslp1