import styled from 'styled-components';
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

export const StyledNavBar = styled.header`
  background: #FFFF;
  margin-bottom: 1rem;
`
export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.15rem 1.15rem 1.15rem 1.15rem;
`
export const Title = styled.h1`
  color: black;
  text-decoration: none;
  margin: 0;
  font-size: 1.25rem;
`
export const Footer = styled.footer`
    color: #909090;
    margin-top: 2em;
    text-align: center;
`

export const Divider = styled.hr`
    max-width: ${props => props.width || '960px'};
    background: #DDD;
    height: 1.2px;
    margin: ${props => props.margin || 'auto'};
`

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: ${props => props.wrap || 'wrap'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    margin: 0 auto;
    max-width: ${props => props.width || '960px'};
    padding: 1.45em 1.0875em;
`

export const FlexItem = styled.div`
    order: ${props => props.order || 1};
    flex-grow: ${props => props.grow || 1};
    align-self: ${props => props.align || 'auto'};
    padding: 10px;
`

export const Item = styled.div`
    float: ${props => props.float || 'left'};
`

export const Icons = styled.a`
    font-size: 1.50rem;
    padding-left: 0.5rem;
    color: #000000;
    text-decoration: none;
`
export const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
  &:after {
    text-decoration: none;
    color: black;
  }
`;

export const ProfilePic = styled(StaticImage)`
  margin-bottom: 1.45rem;
`;

export const ProfileTitle = styled.h3`
  color: black;
  text-decoration: none;
  margin: 0;
  font-size: 35px;
  font-weight: 400;
`;

export const ProfileBody = styled.p`
  color: black;
  text-decoration: none;
  margin: 0;
  font-size: 1.05rem;
`;