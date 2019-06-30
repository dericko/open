import React from "react"
import Image from "../components/image"

const Footer = () => (
  <footer
    style={{
      width: "100%",
      textAlign: "center",
      margin: "9px",
    }}
  >
    <div
      style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}
    >
      <a
        style={{ width: 200 }}
        href="https://podcasts.apple.com/us/podcast/open-meditations/id1469856839"
      >
        <Image imageName="appleBanner" />
      </a>
    </div>
    © {new Date().getFullYear()} made with{" "}
    <span role="img" aria-label="Heart">
      ❤️
    </span>
    in nyc
  </footer>
)

export default Footer
