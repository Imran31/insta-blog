import * as React from "react"
import { FlexContainer, Divider, FlexItem, ProfileTitle, ProfileBody } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * Contains profile pic, basic blog stats and links to social media + stories
*/
const Profile = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: {eq: "profile-pic.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  
  return (<>
    <FlexContainer wrap='wrap'>
      <FlexItem float='left'>
        <Img 
          fluid={ data.image.childImageSharp.fluid }
          style={{ border: "2px solid black", borderRadius: "100%", padding: "10px", minWidth: "100px" }}
         />
      </FlexItem> 
      <FlexItem float='right'>
        <ProfileTitle>imran_manzoor</ProfileTitle>
        <ProfileBody>
          <br />
          he/him<br />
          A greeting not to me<br />
          I return smile and a wave<br />
          Please Allow me to drown<br />
        </ProfileBody>
      </FlexItem> 
    </FlexContainer>
    <Divider></Divider>
  </>)
}

export default Profile
