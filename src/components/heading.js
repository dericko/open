import React from "react"

import styles from "./heading.module.css"
import Image from "./image"

export default () => (
  <React.Fragment>
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
    <div
      style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}
    >
      <a
        style={{ width: 200 }}
        href="https://podcasts.apple.com/us/podcast/open-meditations/id1469856839"
      >
        <Image
          imageName="appleBanner"
          alt="banner to listen on apple podcasts"
        />
      </a>
    </div>
  </React.Fragment>
)
