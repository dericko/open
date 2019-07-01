import React from "react"

import styles from "./heading.module.css"
import Image from "./image"

export default () => (
  <div className={styles.container}>
    <div className={styles.image}>
      <Image imageName="omIcon" alt="open meditations logo" />
    </div>
    <h3 className={styles.description}>
      Simple guided meditations without ads or intros.
      <br />
      <br />
      Ten minutes to support your daily practice.
    </h3>
  </div>
)
