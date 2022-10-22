import Image from 'next/image'
import React from 'react'
import styles from "./Main.module.scss"

const Main = () => {
    return (
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2 className={styles.title}>महेश्वर जंग गहतराज</h2>
                    <p>नेपाली कम्युनिष्ट राजनीतिज्ञ तथा नेपालको संघीय संसद्को प्रतिनिधि सभा सदस्य र हाल <span className={styles.bold}> युवा तथा खेलकुद </span>मन्त्रालयमा नियुक्त</p>

                    <div className={styles.button}>
                        <button className={`${styles.btn} ${styles.first}`}>Become a member</button>
                        <button className={`${styles.btn} ${styles.second}`}>Contact me</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="/avatar1.png" width="403" height="403" alt="Maheshowr Gaharaj" />
                </div>
            </div>
    )
}

export default Main