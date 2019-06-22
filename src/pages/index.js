import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MediaPlayer from "../components/mediaplayer"
// import SupportBanner from "../components/supportbanner"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteDescriptionQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: `240px`,
              marginBottom: `1.45rem`,
            }}
          >
            <Image />
          </div>
          <h3 style={{ margin: "40px" }}>
            Simple guided meditations without ads or intros.
            <br />
            10 minutes, every day.
          </h3>
        </div>
        {/* <SupportBanner /> */}
        <MediaPlayer />
      </Layout>
    )}
  />
)

export default IndexPage
