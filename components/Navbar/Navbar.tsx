import React from 'react'
import styles from "./Navbar.module.scss"
import Logo from "../Logo/Logo"
import { Icon } from '@iconify/react'

const Navbar = () => {
    return (
            <div className={styles.container}>
                <div className={styles.logo}>
                <Logo/>
                </div>
                <div className={styles.right}>
                    {/* <Icon icon="charm:menu-hamburger" className={styles.menu}/> */}
                    <ul className={styles.list}>
                        <li>कार्यक्रमहरु </li>
                        <li>एजेन्दा</li>
                        <li>मिडिया</li>
                        <li>ग्यालेरी </li>
                        <li>योजना</li>
                        <li>मेरो बारे </li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar