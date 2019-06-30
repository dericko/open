import React from "react"
import styles from "./supportbanner.module.css"

const Link = ({ cta, text, link }) => (
  <div className={styles.linkWrapper}>
    <p>{text}</p>
    <a className={styles.link} href={link}>
      {cta}
    </a>
  </div>
)

const supportMessage = "Enjoy the show?"

export default () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h4 className={styles.heading}>{supportMessage}</h4>
    <div className={styles.linkContainer}>
      <Link
        text="Tell your friends! Subscribe or leave a review on iTunes"
        cta="Leave a review"
        link="https://podcasts.apple.com/us/podcast/open-meditations/id1469856839"
      />
      {/* <Link
        text="Join the community! Support the show on Patreon"
        cta="Support on Patreon"
        link="https://www.patreon.com/openmeditations"
      /> */}
    </div>
  </div>
)
