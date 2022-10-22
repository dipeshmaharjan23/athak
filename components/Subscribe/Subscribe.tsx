import Image from 'next/image'
import React from 'react'
import styles from "./Subscribe.module.scss"

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/avatar2.png" width="296" height="296" alt="maheswor" />
      </div>
      <div className={styles.right}>
        <p className={styles.para1}>हाम्रो नियमित अपडेट प्राप्त गर्न आफ्नो इमेल ठेगाना प्रविष्ट गर्नुहोस् </p>
        <p className={styles.para2}>कृपया आफ्नो इमेल ठेगाना प्रविष्ट गर्नुहोस् र इन्टर थिच्नुहोस् वा सदस्यता लिनुहोस्
          क्लिक गर्नुहोस् </p>
        <input type="text" placeholder='ulancemeup@gmail.com' className={styles.input} />
        <button>Suscribe</button>
      </div>
    </div>
  )
}

export default Subscribe