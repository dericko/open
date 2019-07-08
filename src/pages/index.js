import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading"
import Info from "../components/info"
import About from "../components/info-about"
// import SupportBanner from "../components/supportbanner"
import Badges from "../components/badges"

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
        <Heading />
        <Badges primaryOnly />
        {/* <SupportBanner /> */}
        <Info />
        <About />
      </Layout>
    )}
  />
)

export default IndexPage
