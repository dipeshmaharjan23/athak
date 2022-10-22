import Link from "next/link";
import React from "react";
import styles from "./Logo.module.scss"

type Props = {};

export default function NavLogo({ }: Props) {
  return (
    <div className={styles.main}>
      <Link href={"/"}>
        <a className={styles.logo}>
          <img
            src="/logo.png"
            alt="logo"
            height="42"
            width="147"
          />
        </a>
      </Link>
    </div>
  );
}
