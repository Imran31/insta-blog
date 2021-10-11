import * as React from "react"
import { FlexContainer, FlexBio, ProfileTitle, ProfileBody, ProfilePronouns } from "./styles"
import { useStaticQuery, graphql, Link } from "gatsby"
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
      <FlexBio float='left'>
        <Img 
          fluid={ data.image.childImageSharp.fluid }
          style={{ border: "2px solid black", borderRadius: "100%", padding: "10px", minWidth: "100px" }}
         />
      </FlexBio> 
      <FlexBio float='right'>
        <ProfileTitle>imran_manzoor</ProfileTitle>
        <ProfilePronouns>(he/him)</ProfilePronouns>
        <ProfileBody>
          <br />
          Software Engineer <Link to='https://unacademy.com/goal/upsc-optional/NYHNH' rel="noreferrer" target='_blank'>@Unacademy</Link><br /><br />
          I run experiments in the kitchen 🧑🏾‍🍳<br />
          I make/break stuff with code 🛠️<br />
          I am the <Link to='https://twitter.com/poet_of_venice' rel="noreferrer" target='_blank'>@poet_of_venice</Link><br />
          <br />
          <br />
          <a href='https://drive.google.com/file/d/1QuU0piqGbsd-gNbCVwUM2GmkOfB1nJHl/view' rel="noreferrer" target='_blank'>Resume</a>
        </ProfileBody>
      </FlexBio> 
    </FlexContainer>
    
  </>)
}

export default Profile
