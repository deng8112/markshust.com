import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import markshustPhoto from '../../content/assets/markshust-photo-1.png'
import styled from 'styled-components'

const StyledImage = styled.img`
  float: left;
  max-width: 350px;
  max-height: 350px;
`

const AboutPage = ({
  data: {
    site: {
      siteMetadata: { title, description },
    },
  },
  location,
}) => {
  return (
    <Layout location={location} subtitle={description} title={title}>
      <h1>About</h1>
      <StyledImage src={markshustPhoto} alt="Mark Shust" />
      <p>
        Mark Shust is a certified Magento developer & architect with extended
        knowledge of PHP, JavaScript, Laravel, React, Docker, and UI/UX design.
        He has over 15 years of web development experience in the eCommerce,
        real estate, business-to-business, and information technology
        industries. Mark is Magento Certified Developer Plus and a Zend
        Certified Engineer, and has a wide knowledge range of LAMP server
        management and open source software.
      </p>
      <p>
        Mark is married to his wonderful wife Juliann, and they are the proud
        parents of twin girls Lily Ann and Brielle. Mark lives in Northest Ohio,
        and is a devout Cleveland Browns fan, loves eating Chipotle burritos,
        playing scrabble and solving Rubix cubes. Mark loves geek-inspired
        technology, and enjoys living a simplistic lifestyle.
      </p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
