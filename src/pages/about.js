// Step 1: Import React
import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>My name is Emily.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage