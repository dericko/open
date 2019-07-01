import React from "react"
import Image, { APPLE_BANNER } from "./image"

const Footer = () => (
  <footer
    style={{
      width: "100%",
      textAlign: "center",
      marginBottom: 9,
    }}
  >
    <div
      style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}
    >
      <a href="https://podcasts.apple.com/us/podcast/open-meditations/id1469856839">
        <Image
          style={{ width: 200 }}
          imageName={APPLE_BANNER}
          alt="banner to listen on apple podcasts"
        />
      </a>
    </div>
    © {new Date().getFullYear()} made with{" "}
    <span role="img" aria-label="Heart">
      ❤️
    </span>
    in nyc{" "}
  </footer>
)

export default Footer
