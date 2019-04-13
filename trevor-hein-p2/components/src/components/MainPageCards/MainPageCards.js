import React from "react"
import GridLayout from '../GridLayout/GridLayout'
import Grid from '@material-ui/core/Grid'
import MainCard from '../MainPageCards/MainCard'
import { Card } from 'rebass'

const cardData = [
    {   title: "Products", desc: "We offer a wide variety of products.", link: '/products', img: '' },
    {   title: "Process", desc: "Explore how we create our products.", link: '/products', img: '' }
];

class MainPageCards extends React.Component {
    render() {
        return (
            <div>
                <GridLayout>
                    {cardData.map((data, index)=> (
                        <Grid item xs={1} sm={4} md={1}>
                            <MainCard data={data}>
                            </MainCard>
                        </Grid>
                    ))}
                </GridLayout>
            </div>
        )
    }
}

export default MainPageCards;