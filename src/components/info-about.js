import React from "react"

import Image, { ABOUT_PHOTO } from "./image"

import styles from "./info.module.css"

const InfoPage = () => (
  <div className={styles.container} style={{ textAlign: "center" }}>
    <div
      className={styles.infoPage}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Image
        style={{ width: 200, marginBottom: 9, borderRadius: "50%" }}
        imageName={ABOUT_PHOTO}
        alt="photo of derick"
      />
      <p>
        Derick Olson is a writer, educator, and programmer based in New York
        City.
      </p>
      <p>
        You can reach out to me with any questions or comments at:
        <br />
        derick [at] openmeditations [dot] org
      </p>
    </div>
  </div>
)

export default InfoPage
