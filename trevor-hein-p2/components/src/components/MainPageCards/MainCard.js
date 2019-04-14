import React from 'react'
import { Card, Text } from 'rebass'
import MainCardImage from '../MainPageCards/MainCardImage'
import MainCardHeading from '../MainPageCards/MainCardHeading'

class MainCard extends React.Component {

    render() {
        const { data } = this.props;

        return (
            <Card
                fontSize={1}
                fontWeight='bold'
                width={[ 1, 1, 1 ]}
                p={0}
                my={2}
                bg='#f6f6ff'
                borderRadius={8}
                boxShadow='0 15px 16px rgba(0, 0, 0, 0.25)'
            >
                <MainCardImage data={data} />
                <MainCardHeading>
                    {data.title}
                </MainCardHeading>
            </Card>
        )
    }
}

export default MainCard;