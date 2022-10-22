import Image from 'next/image'
import React from 'react'
import styles from "./Quote.module.scss"

const Quoto = () => {
  return (
    <div className={styles.container}>
      <Image src="/avatar3.png" width="370" height="283" alt="" />
      <div className={styles.quote}>
        <p>"सफल राजनीतिक क्रान्ती पछि नेपालीलाई बस्नको लागि उत्तम ठाउँ बनाउने समय आर्थिक क्रान्तिको हो ।" </p>
        <span>- महेश्वर जंग गहतराज</span>
      </div>
    </div>
  )
}

export default Quoto