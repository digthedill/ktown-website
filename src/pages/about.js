import React from "react"
import Head from "../components/head"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import aboutPageStyles from "./about.module.css"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "portrait" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allStrapiAboutMe {
        edges {
          node {
            portrait {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      about {
        childMarkdownRemark {
          html
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="about" />
      <div className={aboutPageStyles.container}>
        <h1>about me</h1>
        <div className={aboutPageStyles.photoContainer}>
          <Img
            fluid={
              data.allStrapiAboutMe.edges[0].node.portrait.childImageSharp.fluid
            }
            className={aboutPageStyles.photo}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.about.childMarkdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default AboutPage
