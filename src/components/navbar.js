import * as React from "react"
import PropTypes from "prop-types"
import { Wrapper, StyledNavBar, Divider, Item, Icons } from "./styles"
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

/*
 * Contains profile pic, basic blog stats and links to social media + stories
*/
const NavBar = ({ github, linkedin }) => {
  const data = useStaticQuery(graphql`
    query Icon {
      icon: file(relativePath: {eq: "gatsby-icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  
  return (
    <StyledNavBar>
      <Wrapper wrap='nowrap'>
        <Item>
          <Link to='/'>
            <Img fluid={ data.icon.childImageSharp.fluid } style={{ minWidth: "30px" }}/>
          </Link>
        </Item>
        <Item float='right'>
          <Icons href={github} target="_blank"><FaGithubSquare /></Icons>
        </Item> 
        <Item float='right'>
          <Icons href={linkedin} target="_blank"><FaLinkedin /></Icons>
        </Item> 
      </Wrapper>
      <Divider width='100%' margin='1.25rem 0rem 1.25rem 0rem'></Divider>
    </StyledNavBar>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
