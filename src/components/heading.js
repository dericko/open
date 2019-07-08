import React from "react"

import styles from "./heading.module.css"
import Image, { OM_ICON } from "./image"

export default () => (
  <div className={styles.container}>
    <div className={styles.image}>
      <Image imageName={OM_ICON} alt="open meditations logo" />
    </div>
    <div>
      <h3 className={styles.description}>
        Simple guided meditations without ads or intros.
        <br />
        <br />
        Ten minutes to support your daily practice.
      </h3>
    </div>
  </div>
)
