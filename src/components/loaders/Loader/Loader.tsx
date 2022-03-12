import React from 'react'
import styles from './Loader.module.scss'
import { Spinner } from '../Spinner'

const Loader = () =>
    <div className={styles.backdrop}>
        <Spinner />
    </div>

export default Loader