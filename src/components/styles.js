import styled from 'styled-components'
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { prop } from 'ramda'

// const size = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px'
// }

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
    position: relative;
    word-break: break-word;
`

export const FlexItem = styled.div`
    order: ${props => props.order || 1};
    /* flex-grow: ${props => props.grow || 1}; */
    align-self: ${props => props.align || 'auto'};
    padding: 10px;
    /* flex-basis: ${props => props.flexBasis || 'auto'}; */
    flex: 0 0 33%;
  @media(max-width: 768px) {
      flex: 0 0 50%;
  }
  @media(max-width: 425px) {
      flex: 1 0 auto;
  }
`

export const FlexBio = styled.div`
    order: ${props => props.order || 1};
    align-self: ${props => props.align || 'auto'};
    padding: 10px;
    flex: 1 0 auto;
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
export const StyledLinkHeader = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
  &:after {
    text-decoration: none;
    color: black;
  }
  background: -webkit-linear-gradient(left, #aa4b6b, #6b6b83, #3b8d99);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ProfilePic = styled(StaticImage)`
  margin-bottom: 1.45rem;
`

export const ProfileTitle = styled.h3`
  color: black;
  text-decoration: none;
  margin: 0;
  font-size: 35px;
  font-weight: 400;
`

export const ProfileBody = styled.p`
  color: black;
  text-decoration: none;
  margin: 0;
  font-size: 1.05rem;
`;

export const ImageBox = styled.div`
  color: ${props => props.color || '#36B1BF'};
  text-decoration: none;
  position: absolute;
  max-width: 200px;
  word-break: break-word;
  z-index:4;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1%;
  margin: 3%;
`;

export const ImageHeading = styled.h3`
  color: ${props => props.color || '#36B1BF'};
  padding: 1%;
  margin: 3%;
`;

export const ImageDate = styled.h4`
  color: ${props => props.color || '#ffffff'};
  padding: 1%;
  margin: 3%;
`;

export const PostStyle = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding: 1.15rem 1.15rem 1.15rem 1.15rem;
`;

export const FlexItemStrory = styled.div`
    order: ${props => props.order || 1};
    /* flex-grow: ${props => props.grow || 1}; */
    align-self: ${props => props.align || 'auto'};
    padding: 10px;
    /* flex-basis: ${props => props.flexBasis || 'auto'}; */
    flex: 0 0 33%;
  @media(max-width: 768px) {
      flex: 0 0 50%;
  }
  @media(max-width: 425px) {
      flex: 1 0 auto;
  }
`
export const FlexStroryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0 !important;
    display: none; 
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`

export const HighLightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  min-width:100px;
`;

export const HighLightIcon = styled.div`
  background-image: url(${props => props.backgroundImage || 'https://images.unsplash.com/photo-1502663228013-cccc7d39c172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80'});
  max-width: 80px;
  min-height: 80px;
  width: 100%;
  background-size: auto 100%;
  /* background-repeat: none; */
  border-radius: 100%;
  margin: 10px;
  padding-bottom:10px;
`;

export const HighLightTitle = styled.div`
  font-size: 0.8em;
`;

export const StoryStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;     
  background: -webkit-linear-gradient(left, rgba(170,75,107,0.5) 0%,rgba(59,141,153, 0.5) 100%); /* Chrome10+,Safari5.1+ */
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const StoryWrapper = styled.div`
  margin: auto auto;
`;
