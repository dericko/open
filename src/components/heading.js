import React from "react"

import styles from "./heading.module.css"
import Image from "./image"

export default () => (
  <div className={styles.container}>
    <a
      className={styles.image}
      href="https://podcasts.apple.com/us/podcast/open-meditations/id1469856839"
    >
      <Image imageName="omIcon" />
    </a>
    <h3 className={styles.description}>
      Simple guided meditations without ads or intros.
      <br />
      <br />
      Ten minutes to support your daily practice.
    </h3>
  </div>
)
