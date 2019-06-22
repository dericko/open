import React from "react"

const Card = ({ cta, link }) => (
  <a
    style={{
      height: 200,
      width: 300,
      background: "lightgray",
      margin: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    href={link}
  >
    <div>{cta}</div>
  </a>
)

export default () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h3>Support the show</h3>
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Card
        cta="Leave a review on iTunes"
        link="https://www.apple.com/itunes/podcasts/"
      />
      <Card
        cta="Support on Patreon"
        link="https://www.patreon.com/openmeditations"
      />
    </div>
  </div>
)
