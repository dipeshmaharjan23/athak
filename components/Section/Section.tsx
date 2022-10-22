import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import styles from "./Section.module.scss"
import Link from 'next/link'

const Section = () => {
  return (
    <div className={styles.main}>
      {/* our vision */}
      <div className={styles.firstSection}>
        <div className={styles.container}>
          <span className={styles.title}>मेरो योजाना</span>
          <span className={styles.subtitle}>तपाईंको आवश्यकता , हाम्रो कार्य </span>
          <p className={styles.paragraph}>अब यहाँबाट हाम्रो योजना हेर्न सक्नुहुन्छ , नेपाललाई फेरि महान् बनाउने यात्रामा मद्दत गर्नुहोस् </p>
        </div>

        <div className={styles.images}>
          <div className={styles.left}>
            <div className={styles.image1}>
              <img src="/pic7.png" alt="water" width="340" height="400" className={styles.firstimage} />
            </div>
            <div className={styles.image2}>
              <img src="/pic5.png" alt="water" width="340" height="400" />
            </div>
          </div>

           <div className={styles.right}>
            <div className={styles.image3}>
              <img src="/pic8.png" alt="water" width="340" height="400" />
            </div>
            <div className={styles.image4}>
              <img src="/pic6.png" alt="water" width="340" height="400" />
            </div>
          </div> 
        </div>
      </div>

      {/* our events  */}
      <div className={styles.secondSection}>
        <div className={styles.container}>
          <span className={styles.title}>आगामी कार्यक्रमहरु
          </span>
          <span className={styles.subtitle}>
            हाम्रो कार्यक्रम तपाईंहरु सबैको लागि</span>
          <p className={styles.paragraph}>अब यहाँबाट तपाईंले हाम्रा कार्यक्रमहरु अपडेट हेर्न सक्नुहुन्छ र राष्ट्र निर्माण गर्न आगामी कार्यक्रमहरुमा हामीसंग सामेल हुन सक्नुहुन्छ</p>
        </div>

        <div className={styles.events}>
          <div className={styles.event}>
            <div className={styles.eventimage}>
              <img src="/pic1.png" alt="Ghar Dailo Program" width="340" height="325" />
            </div>
            <span className={`${styles.status} ${styles.upcoming}`}>Upcoming</span>
            <div className={styles.right}>
              <Link href="https://athak.com.np/2022/09/21/%e0%a4%ae%e0%a4%a8%e0%a5%8d%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%97%e0%a4%b9%e0%a4%a4%e0%a4%b0%e0%a4%be%e0%a4%9c%e0%a4%b2%e0%a5%87-%e0%a4%97%e0%a4%b0%e0%a5%87-%e0%a5%a7%e0%a5%a6%e0%a5%aa/">
                <span className={styles.blue}>Ghar Dailo Program</span>
              </Link>
              <span className={styles.grey}>Banke</span>
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.eventimage}>
              <img src="/pic2.png" alt="Bijay Ralley" width="340" height="325" />
            </div>
            <span className={`${styles.status} ${styles.upcoming}`}>Upcoming</span>

            <div className={styles.right}>
              <span className={styles.blue}>Bijay Ralley</span>
              <span className={styles.grey}>Banke</span>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.eventimage}>
              <img src="/pic3.png" alt="Chunab vela" width="340" height="325" />
            </div>
            <span className={`${styles.status} ${styles.ongoing}`}>Ongoing</span>

            <div className={styles.right}>
              <span className={styles.blue}>Chunab vela</span>
              <span className={styles.grey}>Dartmouth College</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Section