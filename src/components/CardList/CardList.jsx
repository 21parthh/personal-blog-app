import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../Pagination/Pagination'

const CardList = () => {
  return (
    <div className={styles.container}>CardList
      <Pagination/>
    </div>
  )
}

export default CardList