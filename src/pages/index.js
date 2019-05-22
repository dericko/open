import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <h3>{data.site.siteMetadata.description}</h3>
      </Layout>
    )}
  />
)

export default IndexPage
