import React from "react"
import styles from "./supportbanner.module.css"

const Link = ({ cta, link }) => (
  <a className={styles.link} href={link}>
    {cta}
  </a>
)

const supportMessage = "Enjoy the show?"

export default () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h4 className={styles.heading}>{supportMessage}</h4>
    <div className={styles.linkContainer}>
      {/* <Link
        cta="Leave a review on iTunes"
        link="https://www.apple.com/itunes/podcasts/"
      /> */}
      <Link
        cta="Support on Patreon"
        link="https://www.patreon.com/openmeditations"
      />
    </div>
  </div>
)
