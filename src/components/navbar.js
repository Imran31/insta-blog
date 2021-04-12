import * as React from "react"
import PropTypes from "prop-types"
import { Wrapper, Title, StyledNavBar, Divider, Item, Icons, StyledLink } from "./styles"
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

/*
 * Contains profile pic, basic blog stats and links to social media + stories
*/
const NavBar = ({ siteTitle, github, linkedin }) => (
  <StyledNavBar>
    <Wrapper wrap='nowrap'>
      <Item>
        <Title>
            <StyledLink to='/'>
              {siteTitle}
            </StyledLink>
        </Title>
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

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
