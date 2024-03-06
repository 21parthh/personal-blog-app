import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLinks from '../AuthLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24}/>
        <Image src="/instagram.png" width={24} height={24}/>
        <Image src="/tiktok.png" width={24} height={24}/>
        <Image src="/youtube.png" width={24} height={24}/>
      </div>
      <div className={styles.logo}>parth.dev</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/">HomePage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks/>

      </div>

    </div>
  )
}

export default Navbar
