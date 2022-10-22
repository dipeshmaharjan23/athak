import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./Media.module.scss"

const Media = () => {
  return (
    <div className={styles.media}>
      <h3>मिडिया</h3>
      <div className={styles.images}>
        <div className={styles.image}>
          <img src="/pic4.png" width="340" height="215" alt="visit place" />
          <Link href="https://athak.com.np/2022/09/21/%e0%a4%b8%e0%a5%81%e0%a4%96%e0%a5%8d%e0%a4%96%e0%a4%be-%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a5%87%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a4%95%e0%a5%8b-%e0%a4%85%e0%a4%a8%e0%a5%81%e0%a4%97%e0%a4%ae%e0%a4%a8%e0%a4%ae/">
            <p>सुख्खा क्षेत्रको अनुगमनमा मन्त्री अथक,राहत प्याकेजकालागि पहल </p>
          </Link>
          <span className={styles.date}>Jan 21,2021</span>
        </div>
        <div className={styles.image}>
          <img src="/pic9.png" width="340" height="215" alt="visit place" />
          <Link href="https://athak.com.np/2022/09/21/%e0%a4%a8%e0%a4%af%e0%a4%be%e0%a4%81-%e0%a4%aa%e0%a5%81%e0%a4%b8%e0%a5%8d%e0%a4%a4%e0%a4%be%e0%a4%ae%e0%a4%be-%e0%a4%aa%e0%a4%a0%e0%a4%a8%e0%a4%b6%e0%a5%88%e0%a4%b2%e0%a5%80%e0%a4%95%e0%a5%8b/">
            <p>नयाँ पुस्तामा पठनशैलीको विकास गर्न आवश्यक छ : मन्त्री अथक  </p>
          </Link>
          <span className={styles.date}>Jan 21,2021</span>
        </div>
        <div className={styles.image}>
          <img src="/pic10.png" width="340" height="215" alt="visit place" />
          <Link href="https://athak.com.np/2022/09/21/hello-world/">
            <p className={styles.paragraph}>ARGENTINIAN AMBASSADOR ACCEPTS SPORTS MINISTER'S FRIENDLY GAME</p>
          </Link>
          <span className={styles.date}>Jan 21,2021</span>
        </div>
      </div>
    </div>
  )
}

export default Media