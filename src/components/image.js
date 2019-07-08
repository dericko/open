import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export const {
  OM_ICON,
  APPLE_ICON,
  APPLE_BANNER,
  ABOUT_PHOTO,
  PLAY_ICON,
  PAUSE_ICON,
} = {
  OM_ICON: "omIcon",
  APPLE_ICON: "appleIcon",
  APPLE_BANNER: "appleBanner",
  ABOUT_PHOTO: "aboutPhoto",
  PLAY_ICON: "playIcon",
  PAUSE_ICON: "pauseIcon",
}

const Image = ({ imageName, alt, style }) => (
  <StaticQuery
    query={graphql`
      query {
        omIcon: file(relativePath: { eq: "om-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        appleIcon: file(relativePath: { eq: "apple-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        appleBanner: file(relativePath: { eq: "apple-banner.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutPhoto: file(relativePath: { eq: "about-photo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        playIcon: file(relativePath: { eq: "play-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pauseIcon: file(relativePath: { eq: "pause-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          style={style}
          alt={alt}
          fluid={data[imageName].childImageSharp.fluid}
        />
      )
    }}
  />
)

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  imageName: PropTypes.oneOf([
    OM_ICON,
    APPLE_ICON,
    APPLE_BANNER,
    ABOUT_PHOTO,
    PLAY_ICON,
    PAUSE_ICON,
  ]),
  style: PropTypes.object,
}

export default Image
