import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1
      className={styles.title}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {siteTitle}
    </h1>
    <a
      className={styles.iconLink}
      href="https://podcasts.apple.com/us/podcast/open-meditations/id1469856839"
    >
      <Image imageName="appleIcon" alt="icon to listen on apple podcasts" />
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
