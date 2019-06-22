import React from "react"
const Footer = () => (
  <footer
    style={{
      width: "100%",
      textAlign: "center",
      margin: "9px",
    }}
  >
    © {new Date().getFullYear()} made with{" "}
    <span role="img" aria-label="Heart">
      ❤️
    </span>
    in nyc
  </footer>
)

export default Footer
