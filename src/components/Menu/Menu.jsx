import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3>Lorem ipsum dolor sit amet consectur adispoicing elit</h3>00
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}></span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu