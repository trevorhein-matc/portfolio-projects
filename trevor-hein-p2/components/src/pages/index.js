import React from 'react'
import Layout from '../layouts/layout'
import Carousel from "../components/Carousel/Carousel"
import MainPageCards from "../components/MainPageCards/MainPageCards"

const IndexPage = () => (
  <Layout>
    <Carousel />
    <MainPageCards />
  </Layout>
)

export default IndexPage
