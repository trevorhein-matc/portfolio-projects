import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../layouts/layout'
// import Image from '../gatsby-components/image'
// import SEO from '../gatsby-components/seo'
// import { Button, IconButton, Section } from '../components/Element'
// import { Search } from 'styled-icons/feather'

// import FruitData from "../data/fruit.json";
import VeggieData from "../data/veggie.json";
// import ProteinData from "../data/protein.json";
import { Flex } from 'rebass';
import JumbotronImage from "../components/Images/JumbotronImage"
import Carousel from "../components/Carousel/Carousel"
// import ImageContainer from "../components/Images/ImageContainer"

const IndexPage = () => (
  <Layout>
    <Carousel />

    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
      {/* <h1>Welcome to the Twisted Leaf</h1> */}
      {VeggieData.map((card) => (
        <Flex key={card.name}>
          <JumbotronImage data={card}/>
        </Flex>
      ))}
  </Layout>
)

export default IndexPage
