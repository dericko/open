import React from "react"

import styles from "./heading.module.css"
import Image from "./image"

export default () => (
  <div className={styles.container}>
    <div className={styles.image}>
      <Image />
    </div>
    <h3 className={styles.description}>
      Simple guided meditations without ads or intros.
      <br />
      10 minutes, every day.
    </h3>
  </div>
)
