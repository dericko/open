import React from "react"
import PropTypes from "prop-types"
import ReactAudioPlayer from "react-audio-player"

// import MiniPlayer from "./miniplayer"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1
      className={styles.title}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {siteTitle}
    </h1>
    <div className={styles.audioPlayer}>
      <ReactAudioPlayer
        src="https://mcdn.podbean.com/mf/web/mhx2t3/om-0-introducing-open-meditations.mp3"
        controls
      />
    </div>
    {/* <div className={styles.miniPlayer}>
      <MiniPlayer />
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
