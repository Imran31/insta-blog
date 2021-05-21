import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"
import ImageGrid from "../components/imageGrid"
import { Divider } from "../components/styles"
import loadable from '@loadable/component'

const Stories = loadable(() => import('../components/stories'))

const IndexPage = ({ data }) => {
  return (
  <Layout>
    <Profile />
    <SEO title="Home" />
    <Stories></Stories>
    <br></br>
    <Divider></Divider>
    <br></br>
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
    
    <ImageGrid data={data} />
  </Layout>
)}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    image: allFile(sort: {fields: childrenImageSharp___fluid___originalName, order: DESC}) {
      nodes {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`

export default IndexPage
