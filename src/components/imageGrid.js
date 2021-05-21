import * as React from "react"
import { FlexContainer, ImageHeading, FlexItem, ImageBox, ImageDate } from "./styles"
import Img from "gatsby-image"
import { Link } from "gatsby"

/*
 * Contains profile pic, basic blog stats and links to social media + stories
*/
const ImageGrid = ({ data }) => {
  const HeadingColors = ['#36B1BF'];
  return (<>
    <FlexContainer wrap='wrap'>
      { 
        data.image.nodes.filter(image => image.childImageSharp).map((image, index) => {
          const imageName = image.childImageSharp.fluid.originalName.split('.')[0];
          if(!imageName.includes('post'))
            return (<></>);
          const postIndex = imageName.split('-')[1];
          const postLocation = `/${postIndex}/`;
          const postStringName = imageName.split('-')[2];
          const postName = postStringName.split('&').join(' ');
          const postStringDate = imageName.split('-')[3];
          const postDate = postStringDate.split('&').join(' ');
          return (
            <FlexItem key={image.id}>
              <Link key={image.id + 'link'} to={postLocation} >
                <ImageBox key={image.id + 'image-box'} color={HeadingColors[index % HeadingColors.length]}>
                    <ImageDate key={image.id + 'image-date'}>{postDate}</ImageDate>
                    <ImageHeading key={image.id + 'image-heading'}>{postName}</ImageHeading>
                </ImageBox>
                <Img id={image.id} key={image.id+'image'} fluid={image.childImageSharp.fluid} style={{ padding: "20px", minWidth: "200px", minHeight: "200px" }}></Img>
              </Link>
            </FlexItem> 
          )
        })
      }
    </FlexContainer>
  </>)
}

export default ImageGrid
