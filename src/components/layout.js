/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./navbar"
import "./layout.css"
import { Wrapper, Footer } from './styles'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar siteTitle={data.site.siteMetadata?.title || `Title`} github={data.site.siteMetadata?.github || `https://github.com/Imran31`} linkedin={data.site.siteMetadata?.linkedin || `https://www.linkedin.com/in/imran-manzoor-98263657/`} />
      <Wrapper>
        <main>{children}</main>
        <Footer>
          Built with Gatsby.
        </Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
