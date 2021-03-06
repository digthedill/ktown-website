import React from "react"
import Img from "gatsby-image"

//grab the height of the photo
//pass height as state to back of card

const FrontCard = props => {
  return (
    <div
      onClick={props.onClick}
      onKeyPress={props.onClick}
      role="button"
      tabIndex={0}
    >
      <Img fluid={props.src} objectFit="contain" />
    </div>
  )
}

export default FrontCard
