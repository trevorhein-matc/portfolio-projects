import React from 'react'
import { Card } from 'rebass'

class MainCard extends React.Component {

    render() {
        const { data } = this.props;

        return (
            <Card
                fontSize={6}
                fontWeight='bold'
                width={[ 1, 1, 1 ]}
                p={5}
                my={2}
                bg='#f6f6ff'
                borderRadius={8}
                boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
            >
            
            {data.title}
            </Card>
        )
    }
}

export default MainCard;