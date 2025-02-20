"use client"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/services/location.module.scss"
import Link from 'next/link'
import { ArrowIcon, EmailIcon, PhoneIcon } from '@/src/app/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

// Location Images
import Dubai from "media/locations/Dubai.webp"
import Chicago from "media/locations/Chicago.webp"
import Houston from "media/locations/Houston.webp"
import LosAngeles from "media/locations/LosAngeles.webp"
import Miami from "media/locations/Miami.webp"
import NewYork from "media/locations/NewYork.webp"
import SanFrancisco from "media/locations/SanFrancisco.webp"
import Toronto from "media/locations/Toronto.webp"
import Dallas from "media/locations/Dallas.webp"
import Qatar from "media/locations/Qatar.webp"
import Bahrain from "media/locations/Bahrain.webp"
import Pierre from "media/locations/Pierre.webp"
import Sharjah from "media/locations/Sharjah.webp"


const OPTIONS = { align: 'start', loop: "true" }

const LocationList = [
    {
        state: "Houston",
        add: "office abc street, United States",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Houston.src,
        // pin: "https://maps.app.goo.gl/onTtH6csSWJu2gAb7"
    },
    {
        state: "Chicago",
        add: "office abc street, United States",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Chicago.src,
        // pin: "https://maps.app.goo.gl/VH6Dkp1J2wtNvLBC6"
    },
    {
        state: "Dubai",
        add: "office abc street, Dubai UAE",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Dubai.src,
        // pin: "https://maps.app.goo.gl/NzJaVuqgdpLYyaT28"
    },
    {
        state: "Los Angeles",
        add: "office abc street, United States",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: LosAngeles.src,
        // pin: "https://maps.app.goo.gl/ot7knKM1rXFFjpKMA"
    },
    {
        state: "Miami",
        add: "office abc street, United States",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Miami.src,
        // pin: "https://maps.app.goo.gl/sZDSxoSewEBHY1z27"
    },
    {
        state: "New York",
        add: "office abc street, United States",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: NewYork.src,
        // pin: "https://maps.app.goo.gl/CPdXRcRzGxGRAuNU8"
    },
    {
        state: "San Francisco",
        add: "office abc street, United States",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: SanFrancisco.src,
        // pin: "https://maps.app.goo.gl/SzwvHzAKoLgiwWPm7"
    },
    {
        state: "Toronto",
        add: "office abc street, Canada",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Toronto.src,
        // pin: "https://maps.app.goo.gl/dhULjcCFCiZ9fNyQ7"
    },
    {
        state: "Dallas",
        add: "office abc street, United States",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Dallas.src,
        // pin: "https://maps.app.goo.gl/i76RsaokYHwn47vU9"
    },
    {
        state: "Qatar",
        add: "office abc street, Qatar",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Qatar.src,
        // pin: "https://maps.app.goo.gl/qimC1ofuhhu3z512A"
    },
    {
        state: "Bahrain",
        add: "office abc street, Bahrain",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Bahrain.src,
        // pin: "https://maps.app.goo.gl/N52TCmfz7GQbH35m8"
    },
    {
        state: "Pierre",
        add: "office abc street, United States",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Pierre.src,
        // pin: "https://maps.app.goo.gl/YEEuBJKd9GvXuMk18"
    },
    {
        state: "Sharjah",
        add: "office abc street, Sharjah UAE",
        phone: "(012) 345 6789",
        email: "info@xyz.com",
        img: Sharjah.src,
        // pin: "https://maps.app.goo.gl/nbce4oEJoivkzVnt5"
    },
]

const Location = () => {
    const [emblaRef, embla] = useEmblaCarousel(OPTIONS, [Autoplay()]);
    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.locationSection} bgBlack pt-100`}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <h2>Our Global Presence</h2>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {LocationList.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.locationBox}>
                                                <div className={styles.imgBox}>
                                                    <Image src={item.img} alt="Houston" fill />
                                                    <div className={styles.locationTitle}>
                                                        {item.state}
                                                    </div>
                                                </div>

                                                <div className={styles.locationContent}>
                                                    <div className={styles.locState}>{item.state}</div>
                                                    <div className={styles.locAdd}>
                                                        <a href={item.pin} target='_blank'>{item.add}</a>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <Link href={`tel:${item.phone}`}>
                                                                <PhoneIcon />
                                                                {item.phone}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`mailto:${item.email}`}>
                                                                <EmailIcon />
                                                                {item.email}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <ArrowIcon direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <ArrowIcon direction="next" />
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Location