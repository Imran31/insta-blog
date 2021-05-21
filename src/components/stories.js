import * as React from "react"
import { HighLightContainer, HighLightTitle, FlexStroryContainer, HighLightIcon, StoryStyle, StoryWrapper  } from "./styles"
import { useState } from 'react';
import Stories from 'react-insta-stories';


const highlights = [
  {
    title: 'About me',
    stories: [
      {
        url: 'https://res.cloudinary.com/imranmanzoor/image/upload/ar_1:2,c_fill,q_80,w_2624,z_0.1/v1621624386/story_2-1_lk6zbu.jpg',
      },
    ],
    icon: 'https://res.cloudinary.com/imranmanzoor/image/upload/c_fill,q_80,w_2624,z_0.1/v1621624386/story_2-1_lk6zbu.jpg'
  },
]


/*
 *  Styles Highlight Icon: Make round, resize and add border
*/
const HighLight = ({ stories, title, icon }) => {
  const [isHighlightClicked, setHighlightClicked] = useState(0);
  
  return (
    <HighLightContainer onKeyDown={(e) => {e.key === 'Escape' && setHighlightClicked(0) }} tabIndex="0">
        <HighLightIcon backgroundImage={icon}  onClick={() => {
          setHighlightClicked(1)
        }} />
        <HighLightTitle>{title}</HighLightTitle>
        {
          isHighlightClicked ? 
            <StoryStyle>
              <StoryWrapper>
              <Stories stories={stories} onAllStoriesEnd={() => {setHighlightClicked(0)}} height={window.innerWidth <= 425 ? window.innerHeight : '768px'} width={window.innerWidth <= 425 ? window.innerWidth : '455px'} keyboardNavigation={true} />
              </StoryWrapper>
              
            </StoryStyle> : null
        }
        
    </HighLightContainer>
)}


const MyStories = () => {
  return (
    <FlexStroryContainer>
      {
        highlights.map((highlight, index) => {
          return (
            <HighLight stories={highlight.stories} title={highlight.title} icon={highlight.icon} key={`highlight-${index}`}></HighLight>
          )
        }) 
      }
  </FlexStroryContainer>
    
)}

// const MyStories = () => {
//   const { image: { nodes: images } } = useStaticQuery(graphql`
//     query Stroies {
//       image: allFile(sort: {fields: childrenImageSharp___fixed___originalName, order: ASC}) {
//         nodes {
//           id
//           childImageSharp {
//             fixed(width: 500, height: 500) {
//               ...GatsbyImageSharpFixed
//               originalName
//             }
//           }
//         }
//       }
//     }
//   `)
//   const highlightMap = {};
//   const hightNames = [];
//   const highlightTitles = [];
//   images.forEach(({ childImageSharp }) => {
//     if(!childImageSharp)
//       return
//     const highlightName = childImageSharp.fixed.originalName.split('-')[0];
//     if(!highlightName.includes('story'))
//       return
//     if(highlightMap[highlightName])
//       highlightMap[highlightName].push(childImageSharp.fixed.originalName)
//     else {
//       hightNames.push(highlightName)
//       highlightMap[highlightName] = [childImageSharp.fixed.base64]
//     } 
//   });
//   return (
//     <FlexStroryContainer>
//       {
//         highlights.map((name, index) => {
//           console.log(name)
//           return (
//             <HighLight stories={highlightMap[name]} key={`highlight-${index}`}></HighLight>
//           )
//         }) 
//       }
//   </FlexStroryContainer>
    
// )}

export default MyStories
