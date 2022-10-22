import React from 'react'
import styles from "./Homepage.module.scss"
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Section from '../Section/Section'
import Footer from '../Footer/Footer'
import Media from "../MediaSection/Media"
import Subscribe from '../Subscribe/Subscribe'
import Quoto from '../Quote/Quote'
const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Main />
                <Section />
                <Quoto />
                <Media />
                <Subscribe />
                <Footer />
            </div>
        </>
    )
}

export default Homepage