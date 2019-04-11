import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'
import Image from '../gatsby-components/image'
import { Button, IconButton, Section } from '../components/Element'
import { Search } from 'styled-icons/feather'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Section flex justifyContent="space-evenly" m={2}>
      <Link to="/page-2/">Go to page 2</Link>
      <Button variant="primary">My Custom Button!</Button>
      <IconButton icon={<Search />} />
    </Section>
  </Layout>
)

export default AboutPage