import Link from "next/link";
import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_links}>
                    <div className={styles.author}>
                        <Logo />
                        <p className={styles.paragraph}>
                            नेपाली कम्युनिष्ट राजनीतिज्ञ तथा नेपालको संघिय (स्ंस्द्को) (प्रतीनइधी) सभा सदस्य र हाल <span className={styles.bold}> युवा तथा खेल्कुदा </span>मन्त्रालयमा (नियुत्त)</p>
                    </div>

                    <div className={styles.list}>
                        <h3 className={styles.listTitle}>About</h3>
                        <ul>
                            <FooterLink to="/">मेरो बारे </FooterLink>
                            <FooterLink to="/">सम्पर्क गर्नुहोस </FooterLink>
                        </ul>
                    </div>

                    <div className={styles.list}>
                        <h3 className={styles.listTitle}>More</h3>
                        <ul>
                            <FooterLink to="/">कार्यक्रमहरु</FooterLink>
                            <FooterLink to="/">एजेन्दा</FooterLink>
                            <FooterLink to="/">मिडिया</FooterLink>
                            <FooterLink to="/">ग्यालेरी </FooterLink>
                            <FooterLink to="/">योजना</FooterLink>
                        </ul>
                    </div>

                    <div className={styles.social}>
                        <h3 className={styles.listTitle}>Follow</h3>
                        <ul className={styles.socialicon}>
                            <Link href="https://www.facebook.com/athakmaheshworgahatraj2">
                                <a > <Icon icon="akar-icons:facebook-fill" /></a>
                            </Link>
                            <a ><Icon icon="fa-brands:instagram-square" /></a>
                            <Link href="https://twitter.com/youthmoys">
                                <a ><Icon icon="ant-design:twitter-circle-filled" /></a>
                            </Link>
                            <a ><Icon icon="entypo-social:linkedin-with-circle" /></a>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    );
};

const FooterLink = ({ children, to }: { children: string; to: string }) => {
    return (
        <li>
            <Link href={to} passHref>
                <a>{children}</a>
            </Link>
        </li>
    );
};

export default Footer;
