import React from "react"
import GridLayout from '../GridLayout/GridLayout'
import Grid from '@material-ui/core/Grid'
import MainCard from '../MainPageCards/MainCard'
import { Card } from 'rebass'

class MainPageCards extends React.Component {
    render() {
        return (
            <div>
                <GridLayout>
                    <Grid item xs={1} sm={5} md={1}>
                        <MainCard>
                        </MainCard>
                        <MainCard>
                        </MainCard>
                    </Grid>
                </GridLayout>
            </div>
        )
    }
}

export default MainPageCards;