import React from "react"
import { Badges } from "./badges"

const Footer = () => (
  <footer
    style={{
      width: "100%",
      textAlign: "center",
      marginBottom: 9,
    }}
  >
    <Badges />© {new Date().getFullYear()} made with{" "}
    <span role="img" aria-label="Heart">
      ❤️
    </span>
    in nyc{" "}
  </footer>
)

export default Footer
