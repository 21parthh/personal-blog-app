import Link from 'next/link'
import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        11.02.2023 - 
                    </span>
                    <span className={styles.category}> CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio ipsa animi, architecto sint earum laboriosam distinctio hic placeat iure quidem quo at enim perferendis aliquid veritatis, nobis quia? Quisquam.
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card
