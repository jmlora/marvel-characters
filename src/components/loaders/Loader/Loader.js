import React from 'react'
import styles from './Loader.module.scss'
import { Spinner } from '../Spinner'

const Loader = () =>
  <div className={styles.loader_container}>
    <div className={styles.backdrop} />
    <div className={styles.spinner_container}>
      <Spinner />
    </div>
  </div>

export default Loader