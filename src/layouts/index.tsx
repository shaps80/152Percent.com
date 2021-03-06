import * as React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "modern-normalize"
import "../styles/normalize"
import favicon from "../images/favicon.png"

import Header from "../components/Header"
import LayoutRoot from "../components/LayoutRoot"
import LayoutMain from "../components/LayoutMain"

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
          ]}
        >
          <html lang="en-GB" />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
