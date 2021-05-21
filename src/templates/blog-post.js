import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { PostStyle } from "../components/styles"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostStyle>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostStyle>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`